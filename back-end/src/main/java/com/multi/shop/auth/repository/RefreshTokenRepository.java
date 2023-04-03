package com.multi.shop.auth.repository;

import com.multi.shop.auth.domain.vo.RefreshTokenVO;
import com.multi.shop.auth.mapper.RefreshTokenMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class RefreshTokenRepository {
    private final RefreshTokenMapper refreshTokenMapper;

    public void save(RefreshTokenVO vo) {
        refreshTokenMapper.save(vo);
    }

    public Optional<RefreshTokenVO> findTokenByKey(String key) {
        return refreshTokenMapper.findTokenByKey(key);
    }

    public void remove(String token) {
        refreshTokenMapper.remove(token);
    }
}
