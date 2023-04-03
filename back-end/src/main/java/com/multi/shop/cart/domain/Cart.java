package com.multi.shop.cart.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Cart {
    private Long id;
    private boolean checked;
    private int quantity;
    private Long memberId;
    private Long productId;

    @Builder
    public Cart(Long id, boolean checked, int quantity, Long memberId, Long productId) {
        this.id = id;
        this.checked = checked;
        this.quantity = quantity;
        this.memberId = memberId;
        this.productId = productId;
    }
}
