package com.multi.shop.order.domain.dao;

import com.multi.shop.order.domain.Status;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderSaveDAO {
    private Long memberId;
    private Long productId;
    private LocalDate date;
    private Status status;
    private int quantity;

    @Builder
    public OrderSaveDAO(Long memberId, Long productId, LocalDate date, Status status, int quantity) {
        this.memberId = memberId;
        this.productId = productId;
        this.date = date;
        this.status = status;
        this.quantity = quantity;
    }

    public static OrderSaveDAO from(Long memberId, Long productId) {
        return OrderSaveDAO.builder()
                .memberId(memberId)
                .productId(productId)
                .date(LocalDate.now())
                .status(Status.PAYMENT)
                .quantity(1)
                .build();
    }
}
