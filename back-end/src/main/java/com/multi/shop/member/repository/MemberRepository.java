package com.multi.shop.member.repository;

import com.multi.shop.member.domain.Member;
import com.multi.shop.member.domain.vo.MemberVO;
import com.multi.shop.member.dto.request.MemberModifyPWRequest;
import com.multi.shop.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Repository
public class MemberRepository {
    private final MemberMapper memberMapper;

    public Long save(MemberVO member) {
        return memberMapper.save(member);
    }

    public Optional<Member> findById(Long id) {
        return memberMapper.findById(id);
    }

    public Optional<MemberVO> findByMemberEmail(String email) {
        return memberMapper.findByMemberEmail(email);
    }

    public void updatePassword(MemberModifyPWRequest request) {
        memberMapper.updatePassword(request);
    }

    public boolean existByMemberEmail(String email) {
        return memberMapper.existByMemberEmail(email);
    }

    public boolean existByMemberPhone(String phone) {
        return memberMapper.existByMemberPhone(phone);
    }
}
