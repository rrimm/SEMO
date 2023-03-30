package com.multi.shop.auth.mapper;

import com.multi.shop.auth.domain.dao.MemberJoinDAO;

public interface AuthMapper {
    Long joinMember(MemberJoinDAO dao);
}
