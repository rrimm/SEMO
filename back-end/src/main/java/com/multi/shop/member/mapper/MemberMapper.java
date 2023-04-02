package com.multi.shop.member.mapper;

import com.multi.shop.member.domain.vo.MemberVO;
import com.multi.shop.member.dto.request.MemberModifyPWRequest;

import java.util.Optional;

public interface MemberMapper {
    Long save(MemberVO member);

    Optional<MemberVO> findById(Long id);

    Optional<MemberVO> findByMemberEmail(String email);

    boolean existByMemberEmail(String email);

    boolean existByMemberPhone(String phone);

    void modifyPassword(MemberModifyPWRequest request);
}
