package com.multi.shop.cart.domain.vo;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class CartVO {
    private Long cartId;
    private boolean checked;
    private int quantity;
    private Long productId;
    private String productImage;
    private String productName;
    private int productPrice;
    private Long memberId;
}
