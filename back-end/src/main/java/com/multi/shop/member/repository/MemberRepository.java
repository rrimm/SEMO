package com.multi.shop.member.repository;

import com.multi.shop.auth.domain.dao.MemberJoinDAO;
import com.multi.shop.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class MemberRepository {
    private final MemberMapper memberMapper;

    public Long joinMember(MemberJoinDAO dao) {
        return memberMapper.joinMember(dao);
    }
}
