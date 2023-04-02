package com.multi.shop.cart.dto.response;

import com.multi.shop.cart.domain.vo.CartVO;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
public class CartResponse {
    private Long cartId;
    private boolean checked;
    private int quantity;
    private Long productId;
    private String productImage;
    private String productName;
    private int productPrice;

    @Builder
    public CartResponse(Long cartId, boolean checked, int quantity, Long productId, String productImage, String productName, int productPrice) {
        this.cartId = cartId;
        this.checked = checked;
        this.quantity = quantity;
        this.productId = productId;
        this.productImage = productImage;
        this.productName = productName;
        this.productPrice = productPrice;
    }

    public static CartResponse from(CartVO cart) {
        return CartResponse.builder()
                .cartId(cart.getCartId())
                .checked(cart.isChecked())
                .quantity(cart.getQuantity())
                .productId(cart.getProductId())
                .productImage(cart.getProductImage())
                .productName(cart.getProductName())
                .productPrice(cart.getProductPrice())
                .build();
    }
}
