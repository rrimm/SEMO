package com.multi.shop.auth.domain.vo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class RefreshTokenVO {
    private String key;
    private String value;

    @Builder
    public RefreshTokenVO(String key, String value) {
        this.key = key;
        this.value = value;
    }
}
