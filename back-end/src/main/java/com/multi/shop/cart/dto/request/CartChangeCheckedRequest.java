package com.multi.shop.cart.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class CartChangeCheckedRequest {
    @NotNull
    private Long id;


    private boolean checked;

    @Builder
    public CartChangeCheckedRequest(Long cartId, boolean checked) {
        this.id = cartId;
        this.checked = checked;
    }
}
