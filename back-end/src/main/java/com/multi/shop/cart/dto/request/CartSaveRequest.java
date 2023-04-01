package com.multi.shop.cart.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class CartSaveRequest {
    @NotNull
    private Long productId;

    @NotNull
    private Long memberId;

    private boolean checked = true;

    private int quantity = 1;
}
