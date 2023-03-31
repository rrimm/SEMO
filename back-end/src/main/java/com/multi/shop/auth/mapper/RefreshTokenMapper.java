package com.multi.shop.auth.mapper;

import com.multi.shop.auth.domain.dao.RefreshTokenDAO;

public interface RefreshTokenMapper {
    void save(RefreshTokenDAO dao);
}
