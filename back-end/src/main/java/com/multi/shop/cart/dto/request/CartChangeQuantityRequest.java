package com.multi.shop.cart.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class CartChangeQuantityRequest {
    @NotNull
    private Long id;
    @NotNull
    private int quantity;
}
