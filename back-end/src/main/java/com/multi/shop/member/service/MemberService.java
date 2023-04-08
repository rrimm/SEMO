package com.multi.shop.member.service;

import com.multi.shop.member.domain.*;
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

        Email email = Email.from(request.getEmail());
        Name name = Name.from(request.getName());
        Password password = Password.encode(request.getPassword(), passwordEncoder);
        Phone phone = Phone.of(request.getPhone());

        MemberVO saveMemberVO = MemberVO.from(request, email, name,password, phone);

        return memberRepository.save(saveMemberVO);
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

    public Member findById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new MemberException(MemberErrorCode.MEMBER_NOT_EXIST));
    }

    public MemberResponse findInfoById(Long id) {
        Member findMember = findById(id);
        return MemberResponse.from(findMember);
    }

    @Transactional
    public void updatePassword(MemberModifyPWRequest request) {
        Member findMember = findById(request.getMemberId());
        confirmPassword(findMember, request.getNowPassword());
        Password password = Password.encode(request.getNewPassword(), passwordEncoder);

        request.setNewPassword(password.getValue());
        memberRepository.updatePassword(request);
    }

    private void confirmPassword(Member member, String password) {
        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new MemberException(MemberErrorCode.MEMBER_WRONG_PASSWORD);
        }
    }
}
