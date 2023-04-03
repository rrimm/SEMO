package com.multi.shop.auth.repository;

import com.multi.shop.auth.domain.vo.RefreshTokenVO;
import com.multi.shop.auth.mapper.RefreshTokenMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class RefreshTokenRepository {
    private final RefreshTokenMapper refreshTokenMapper;

    public void save(RefreshTokenVO vo) {
        refreshTokenMapper.save(vo);
    }

    public void remove(String token) {
        refreshTokenMapper.remove(token);
    }
}
