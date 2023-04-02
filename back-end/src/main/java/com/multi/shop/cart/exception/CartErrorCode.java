package com.multi.shop.cart.exception;

import com.multi.shop.global.exception.exception.ErrorCode;

public enum CartErrorCode implements ErrorCode {

    PRODUCT_ALREADY_EXIST_CART(400, "CART_01", "해당 제품은 이미 장바구니에 있습니다."),
    PRODUCT_QUANTITY_IS_OUT_OF_RANGE(400, "CART_02", "해당 제품의 수량은 1이상, 9이하이여야 합니다.");

    private final int statusCode;
    private final String errorCode;
    private final String message;

    CartErrorCode(int statusCode, String errorCode, String message) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }

    @Override
    public int getStatusCode() {
        return statusCode;
    }

    @Override
    public String getErrorCode() {
        return errorCode;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
