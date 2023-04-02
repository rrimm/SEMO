package com.multi.shop.member.service;

import com.multi.shop.member.domain.Password;
import com.multi.shop.member.domain.Phone;
import com.multi.shop.member.domain.vo.MemberVO;
import com.multi.shop.member.dto.request.MemberJoinRequest;
import com.multi.shop.member.dto.request.MemberModifyPWRequest;
import com.multi.shop.member.dto.response.MemberResponse;
import com.multi.shop.member.exception.MemberErrorCode;
import com.multi.shop.member.exception.MemberException;
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
        validateMemberEmailIsNotDuplicated(request.getEmail());
        validateMemberPhoneIsNotDuplicated(request.getPhone());

        Password password = Password.encode(request.getPassword(), passwordEncoder);
        Phone phone = Phone.of(request.getPhone());

        MemberVO member = MemberVO.of(request, password, phone);

        return memberRepository.save(member);
    }

    private void validateMemberEmailIsNotDuplicated(String email) {
        if (memberRepository.existByMemberEmail(email)) {
            throw new MemberException(MemberErrorCode.JOIN_INVALID_EMAIL);
        }
    }

    private void validateMemberPhoneIsNotDuplicated(String phone) {
        if (memberRepository.existByMemberPhone(phone)) {
            throw new MemberException(MemberErrorCode.JOIN_INVALID_PHONE);
        }
    }

    public MemberResponse findById(Long id) {
        MemberVO findMember = memberRepository.findById(id)
                .orElseThrow(RuntimeException::new);
        return MemberResponse.from(findMember);
    }

    @Transactional
    public void modifyPassword(MemberModifyPWRequest request) {
        MemberVO findMember = memberRepository.findById(request.getMemberId())
                .orElseThrow(RuntimeException::new);

        String encode = passwordEncoder.encode(request.getNowPassword());
        log.info("encode : " + encode);

        Password password = Password.encode(request.getNewPassword(), passwordEncoder);
        request.setNewPassword(password.getValue());
        log.info("암호화 된 새로운 비밀번호 : " + request.getNewPassword());

        memberRepository.modifyPassword(request);
    }

    private void confirmPassword(MemberVO member, String encode) {
        if (!passwordEncoder.matches(member.getPassword(), encode)) {
            throw new RuntimeException("현재 비밀번호가 일치하지 않습니다.");
        }
    }
}
