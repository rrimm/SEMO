package com.multi.shop.member.mapper;

import com.multi.shop.member.domain.vo.MemberVO;

import java.util.Optional;

public interface MemberMapper {
    Long save(MemberVO member);

    Optional<MemberVO> findByMemberEmail(String email);

    boolean existByMemberEmail(String email);

    boolean existByMemberPhone(String phone);
}
