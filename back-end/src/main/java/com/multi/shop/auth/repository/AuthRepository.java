package com.multi.shop.auth.repository;

import com.multi.shop.auth.domain.dao.MemberJoinDAO;
import com.multi.shop.auth.mapper.AuthMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class AuthRepository {
    private final AuthMapper authMapper;

    public Long joinMember(MemberJoinDAO dao) {
        return authMapper.joinMember(dao);
    }
}
