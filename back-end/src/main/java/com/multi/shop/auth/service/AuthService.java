package com.multi.shop.auth.service;

import com.multi.shop.auth.domain.dao.MemberJoinDAO;
import com.multi.shop.auth.dto.request.MemberJoinRequest;
import com.multi.shop.auth.repository.AuthRepository;
import com.multi.shop.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class AuthService {
    private final AuthRepository authRepository;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public Long join(MemberJoinRequest request) {
        log.info(request.getPassword());
        // TODO: 이메일, 전화번호로 중복 가입 검사
        MemberJoinDAO dao = MemberJoinDAO.builder()
                .brith(request.getBirth())
                .email(request.getEmail())
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .build();
        return authRepository.joinMember(dao);
    }
}
