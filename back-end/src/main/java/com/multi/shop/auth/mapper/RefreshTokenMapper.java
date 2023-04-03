package com.multi.shop.auth.mapper;

import com.multi.shop.auth.domain.vo.RefreshTokenVO;

import java.util.Optional;

public interface RefreshTokenMapper {
    void save(RefreshTokenVO vo);

    Optional<RefreshTokenVO> findTokenByKey(String key);

    void remove(String token);

}
