package com.multi.shop.product.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import lombok.Getter;

@Getter
public enum ProductErrorCode implements ErrorCode {

    PRODUCT_NOT_FOUND(400, "PRODUCT_01", "존재하지 않는 상품입니다."),
    ORDER_QUANTITY_GREATER_THEN_PRODUCT_STOCK(400, "PRODUCT_02", "주문하신 수량이 제품의 재고보다 더 많습니다.");

    private final int statusCode;
    private final String errorCode;
    private final String message;

    ProductErrorCode(int statusCode, String errorCode, String message) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}
