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

    public MemberVO findById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new MemberException(MemberErrorCode.MEMBER_NOT_EXIST));
    }

    public MemberResponse findInfoById(Long id) {
        MemberVO findMember = findById(id);
        return MemberResponse.from(findMember);
    }

    @Transactional
    public void updatePassword(MemberModifyPWRequest request) {
        MemberVO findMember = findById(request.getMemberId());

        String encryptedNowPassword = passwordEncoder.encode(request.getNowPassword());
        confirmPassword(findMember, encryptedNowPassword);
        Password password = Password.encode(request.getNewPassword(), passwordEncoder);
        request.setNewPassword(password.getValue());

        memberRepository.updatePassword(request);
    }

    private void confirmPassword(MemberVO member, String password) {
        if (!passwordEncoder.matches(member.getPassword(), password)) {
            throw new MemberException(MemberErrorCode.MEMBER_WRONG_PASSWORD);
        }
    }
}
