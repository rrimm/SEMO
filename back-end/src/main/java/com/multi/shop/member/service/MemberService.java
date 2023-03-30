package com.multi.shop.member.service;

import com.multi.shop.auth.dto.request.MemberJoinRequest;
import com.multi.shop.member.domain.dao.MemberJoinDAO;
import com.multi.shop.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public Long join(MemberJoinRequest request) {
        // TODO: 이메일, 전화번호로 중복 가입 검사
        validateMemberEmailIsNotDuplicated(request.getEmail());
        validateMemberPhoneIsNotDuplicated(request.getPhone());
        MemberJoinDAO dao = MemberJoinDAO.builder()
                .brith(request.getBirth())
                .email(request.getEmail())
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .build();
        return memberRepository.save(dao);
    }

    private void validateMemberEmailIsNotDuplicated(String email) {
        if(memberRepository.existByMemberEmail(email)) {
            throw new RuntimeException("해당 이메일로 가입된 사용자가 있습니다.");
        }
    }

    private void validateMemberPhoneIsNotDuplicated(String phone) {
        if (memberRepository.existByMemberPhone(phone)) {
            throw new RuntimeException("해당 전화번호로 가입된 사용자가 있습니다.");
        }
    }
}
