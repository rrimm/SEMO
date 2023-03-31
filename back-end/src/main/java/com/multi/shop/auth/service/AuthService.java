package com.multi.shop.auth.service;

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
}
