package com.multi.shop.order.domain.vo;

import com.multi.shop.order.domain.Status;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class OrderVO {
    private Long id;
    private LocalDate date;
    private int quantity;
    private Status status;
    private Long memberId;
    private Long productId;
}
