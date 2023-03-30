package com.multi.shop.member.repository;

import com.multi.shop.member.domain.dao.MemberJoinDAO;
import com.multi.shop.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class MemberRepository {
    private final MemberMapper memberMapper;

    public Long save(MemberJoinDAO dao) {
        return memberMapper.save(dao);
    }
    public boolean existByMemberEmail(String email) {
        return memberMapper.existByMemberEmail(email);
    }

    public boolean existByMemberPhone(String phone) {
        return memberMapper.existByMemberPhone(phone);
    }
}
