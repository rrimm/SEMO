package com.multi.shop.auth.service;

import com.multi.shop.auth.domain.vo.RefreshTokenVO;
import com.multi.shop.auth.dto.TokenDto;
import com.multi.shop.auth.dto.request.MemberLoginRequest;
import com.multi.shop.auth.dto.request.MemberLogoutRequest;
import com.multi.shop.auth.repository.RefreshTokenRepository;
import com.multi.shop.auth.support.JwtTokenProvider;
import com.multi.shop.member.domain.vo.MemberVO;
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
                .orElseThrow(RuntimeException::new);

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
}
