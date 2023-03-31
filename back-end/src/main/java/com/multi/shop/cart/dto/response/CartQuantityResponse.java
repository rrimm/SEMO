package com.multi.shop.cart.dto.response;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class CartQuantityResponse {
    private int quantity;

    public CartQuantityResponse(int quantity) {
        this.quantity = quantity;
    }

    public static CartQuantityResponse of(int quantity) {
        return new CartQuantityResponse(quantity);
    }
}
