package com.multi.shop.global.exception.exception;

import lombok.Getter;

@Getter
public class ShopException extends RuntimeException {
    private final int statusCode;
    private final String errorCode;
    private final String message;

    public ShopException(ErrorCode code) {
        this.statusCode = code.getStatusCode();
        this.errorCode = code.getErrorCode();
        this.message = code.getMessage();
    }
}
