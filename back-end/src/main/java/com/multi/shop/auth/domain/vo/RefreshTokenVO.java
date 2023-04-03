package com.multi.shop.auth.domain.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class RefreshTokenVO {
    private String rtKey;
    private String rtValue;

    @Builder
    public RefreshTokenVO(String key, String value) {
        this.rtKey = key;
        this.rtValue = value;
    }

    public RefreshTokenVO update(String token) {
        this.rtValue = token;
        return this;
    }
}
