package com.multi.shop.order.domain.dao;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderSaveDAO {
    private Long memberId;
    private Long productId;
    private boolean checked;
    private int quantity;

    @Builder
    public OrderSaveDAO(Long memberId, Long productId, boolean checked, int quantity) {
        this.memberId = memberId;
        this.productId = productId;
        this.checked = checked;
        this.quantity = quantity;
    }

    public static OrderSaveDAO from(Long memberId, Long productId) {
        return OrderSaveDAO.builder()
                .memberId(memberId)
                .productId(productId)
                .checked(true)
                .quantity(1)
                .build();
    }
}
