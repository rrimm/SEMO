package com.multi.shop.order.domain.vo;

import com.multi.shop.order.domain.Status;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class OrderFindVO {
    private Long id;
    private LocalDate date;
    private int quantity;
    private Status status;
    private Long productId;
    private String productName;
    private int price;
}
