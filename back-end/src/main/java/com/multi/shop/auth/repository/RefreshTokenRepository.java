package com.multi.shop.auth.repository;

import com.multi.shop.auth.domain.dao.RefreshTokenDAO;
import com.multi.shop.auth.mapper.RefreshTokenMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class RefreshTokenRepository {
    private final RefreshTokenMapper refreshTokenMapper;

    public void save(RefreshTokenDAO dao) {
        refreshTokenMapper.save(dao);
    }
}
