package com.multi.shop.order.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderSaveRequest {
    @NotNull
    private Long memberId;

    @NotNull
    private Long productId;
}
