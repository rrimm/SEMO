package com.multi.shop.order.exception;

import com.multi.shop.global.exception.exception.ErrorCode;

public enum OrderErrorCode implements ErrorCode {

    ORDERS_REQUEST_EMPTY(400, "ORDER_01", "주문 요청 정보가 존재하지 않습니다.");

    private final int statusCode;
    private final String errorCode;
    private final String message;

    OrderErrorCode(int statusCode, String errorCode, String message) {
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
