package com.multi.shop.order.dto.request;

import com.multi.shop.order.domain.Status;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
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

    private LocalDate date = LocalDate.now();

    private Status status = Status.PAYMENT;

    private int quantity = 1;
}
