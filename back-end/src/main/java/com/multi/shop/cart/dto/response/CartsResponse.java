package com.multi.shop.cart.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class CartsResponse {
    private List<CartResponse> carts;
    private int size;
    private int price;
    private boolean courierFee;

    @Builder
    public CartsResponse(List<CartResponse> carts, int size, int price, boolean courierFee) {
        this.carts = carts;
        this.size = size;
        this.price = price;
        this.courierFee = courierFee;
    }

    public static CartsResponse from(List<CartResponse> carts, int price, boolean courierFee) {
        return CartsResponse.builder()
                .carts(carts)
                .size(carts.size())
                .price(price)
                .courierFee(courierFee)
                .build();
    }
}
