package com.multi.shop.order.domain.dao;

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
    private boolean checked;
    private int quantity;

    @Builder
    public OrderSaveDAO(Long memberId, Long productId, LocalDate date, boolean checked, int quantity) {
        this.memberId = memberId;
        this.productId = productId;
        this.date = date;
        this.checked = checked;
        this.quantity = quantity;
    }

    public static OrderSaveDAO from(Long memberId, Long productId) {
        return OrderSaveDAO.builder()
                .memberId(memberId)
                .productId(productId)
                .date(LocalDate.now())
                .checked(true)
                .quantity(1)
                .build();
    }
}
