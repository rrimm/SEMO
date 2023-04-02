package com.multi.shop.order.dto.request;

import com.multi.shop.order.domain.Status;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderCancelRequest {
    @NotNull
    private Long orderId;

    private Status status = Status.CANCEL;

    public OrderCancelRequest(Long orderId) {
        this.orderId = orderId;
    }
}
