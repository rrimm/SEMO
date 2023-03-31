package com.multi.shop.order.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderCancelRequest {
    @NotNull
    private Long orderId;

    public OrderCancelRequest(Long orderId) {
        this.orderId = orderId;
    }
}
