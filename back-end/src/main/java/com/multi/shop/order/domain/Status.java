package com.multi.shop.order.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public enum Status {
    PAYMENT(1, "결제"),
    CANCEL(2, "취소"),
    ORDER_CONFIRMATION(3, "주문확정");

    private int id;

    private String text;

    Status(int id, String text) {
        this.id = id;
        this.text = text;
    }
}
