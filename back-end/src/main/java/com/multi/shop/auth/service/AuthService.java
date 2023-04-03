package com.multi.shop.auth.service;

import com.multi.shop.auth.domain.vo.RefreshTokenVO;
import com.multi.shop.auth.dto.TokenDto;
import com.multi.shop.auth.dto.request.MemberLoginRequest;
import com.multi.shop.auth.dto.request.MemberLogoutRequest;
import com.multi.shop.auth.dto.request.TokenRequest;
import com.multi.shop.auth.repository.RefreshTokenRepository;
import com.multi.shop.auth.support.JwtTokenProvider;
import com.multi.shop.member.domain.Member;
import com.multi.shop.member.domain.vo.MemberVO;
import com.multi.shop.member.exception.MemberErrorCode;
import com.multi.shop.member.exception.MemberException;
import com.multi.shop.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class AuthService {
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    @Transactional
    public TokenDto login(MemberLoginRequest request) {
        UsernamePasswordAuthenticationToken authenticationToken = request.toAuthentication();

        // 검증
        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken);

        MemberVO findMember = memberRepository.findByMemberEmail(request.getEmail())
                .orElseThrow(() -> new MemberException(MemberErrorCode.MEMBER_NOT_EXIST));

        TokenDto tokenDto = jwtTokenProvider.generateTokenDto(authentication, findMember);
        RefreshTokenVO token = RefreshTokenVO.builder()
                .key(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();

        refreshTokenRepository.save(token);
        return tokenDto;
    }

    @Transactional
    public void logout(MemberLogoutRequest request) {
        refreshTokenRepository.remove(request.getToken());
    }

    @Transactional
    public TokenDto reissue(TokenRequest request) {
        log.info("run reissue");
        if (!jwtTokenProvider.validateToken(request.getRefreshToken())) {
            throw new RuntimeException("Refresh Token 이 유효하지 않습니다.");
        }

        Authentication authentication = jwtTokenProvider.getAuthentication(request.getAccessToken());

        RefreshTokenVO refreshToken = refreshTokenRepository.findTokenByKey(authentication.getName())
                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        if (!refreshToken.getRtValue().equals(request.getRefreshToken())) {
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        Member findMember = memberRepository.findById(request.getMemberId())
                .orElseThrow(() -> new MemberException(MemberErrorCode.MEMBER_NOT_EXIST));

        MemberVO memberVO = MemberVO.from(findMember);

        TokenDto tokenDto = jwtTokenProvider.generateTokenDto(authentication, memberVO);

        RefreshTokenVO newRefreshToken = refreshToken.update(tokenDto.getRefreshToken());

        refreshTokenRepository.save(newRefreshToken);

        return tokenDto;
    }
}
