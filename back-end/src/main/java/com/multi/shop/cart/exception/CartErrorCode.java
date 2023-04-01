package com.multi.shop.cart.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import org.springframework.http.HttpStatus;

public enum CartErrorCode implements ErrorCode {

    PRODUCT_ALREADY_EXIST_CART(HttpStatus.BAD_REQUEST.value(), "CART_01", "해당 제품은 이미 장바구니에 있습니다.");

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
