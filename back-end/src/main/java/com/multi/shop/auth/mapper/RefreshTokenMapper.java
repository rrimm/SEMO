package com.multi.shop.auth.mapper;

import com.multi.shop.auth.domain.vo.RefreshTokenVO;

public interface RefreshTokenMapper {
    void save(RefreshTokenVO vo);

    void remove(String token);
}
