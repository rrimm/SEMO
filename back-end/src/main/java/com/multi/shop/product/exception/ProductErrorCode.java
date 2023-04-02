package com.multi.shop.product.exception;

import com.multi.shop.global.exception.exception.ErrorCode;

public enum ProductErrorCode implements ErrorCode {

    PRODUCT_NOT_FOUND(400, "PRODUCT_01", "존재하지 않는 상품입니다.");

    private final int statusCode;
    private final String errorCode;
    private final String message;

    ProductErrorCode(int statusCode, String errorCode, String message) {
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
