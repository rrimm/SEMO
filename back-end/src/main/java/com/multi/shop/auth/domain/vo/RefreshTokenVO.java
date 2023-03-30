package com.multi.shop.auth.domain.vo;

import lombok.Data;

@Data
public class RefreshTokenVO {
    private String key;

    private String value;
}
