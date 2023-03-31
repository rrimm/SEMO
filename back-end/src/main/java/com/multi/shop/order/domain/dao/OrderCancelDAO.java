package com.multi.shop.order.domain.dao;

import com.multi.shop.order.domain.Status;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class OrderCancelDAO {
    private Long orderId;
    private Status status;

    @Builder
    public OrderCancelDAO(Long orderId, Status status) {
        this.orderId = orderId;
        this.status = status;
    }

    public static OrderCancelDAO from(Long orderId) {
        return OrderCancelDAO.builder()
                .orderId(orderId)
                .status(Status.CANCEL)
                .build();
    }
}
