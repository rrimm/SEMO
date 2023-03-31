package com.multi.shop.product.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public enum Target {
    MEN(1, "남성"),
    WOMEN(2, "여성"),
    KIDS(3, "키즈");

    private int id;
    private String text;

    Target(int id, String text) {
        this.id = id;
        this.text = text;
    }
}
