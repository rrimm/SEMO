package com.multi.shop.member.mapper;

import com.multi.shop.member.domain.Member;
import com.multi.shop.member.domain.vo.MemberVO;
import com.multi.shop.member.dto.request.MemberModifyPWRequest;

import java.util.Optional;

public interface MemberMapper {
    Long save(MemberVO member);

    Optional<Member> findById(Long id);

    Optional<MemberVO> findByMemberEmail(String email);

    void updatePassword(MemberModifyPWRequest request);

    boolean existByMemberEmail(String email);

    boolean existByMemberPhone(String phone);
}
