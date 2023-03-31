package com.multi.shop.auth.domain.dao;

import lombok.Builder;
import lombok.Data;

@Data
public class RefreshTokenDAO {
    private String key;
    private String value;

    @Builder
    public RefreshTokenDAO(String key, String value) {
        this.key = key;
        this.value = value;
    }
}
