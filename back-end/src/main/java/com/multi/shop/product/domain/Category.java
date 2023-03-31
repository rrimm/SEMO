package com.multi.shop.product.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public enum Category {
    HAT(1, "모자"),
    OUTER(2, "아우터"),
    TOP(3, "상의"),
    BAG(4, "가방"),
    PANT(5, "하의"),
    SHOES(6, "신발"),
    BASIC(7, "베이직");

    private int id;
    private String text;

    Category(int id, String text) {
        this.id = id;
        this.text = text;
    }
}
