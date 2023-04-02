package com.multi.shop.order.domain.vo;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class OrderProductVO {
    private Long id;
    private int quantity;
    private Long productId;
    private String productImage;
    private String productName;
}
