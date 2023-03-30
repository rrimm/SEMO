package com.multi.shop.member.mapper;

import com.multi.shop.member.domain.dao.MemberJoinDAO;

public interface MemberMapper {
    Long save(MemberJoinDAO dao);

    boolean existByMemberEmail(String email);

    boolean existByMemberPhone(String phone);
}
