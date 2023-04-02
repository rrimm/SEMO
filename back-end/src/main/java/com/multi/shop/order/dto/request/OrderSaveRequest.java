package com.multi.shop.order.dto.request;

import com.multi.shop.order.domain.Status;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderSaveRequest {
    @NotNull
    private Long memberId;

    @NotNull
    private Long productId;

    @NotNull
    private Long cartId;

    private LocalDate date = LocalDate.now();

    private Status status = Status.PAYMENT;

    @NotNull
    private int quantity;

    @Builder
    public OrderSaveRequest(Long memberId, Long productId, Long cartId, int quantity) {
        this.memberId = memberId;
        this.productId = productId;
        this.cartId = cartId;
        this.quantity = quantity;
    }
}
