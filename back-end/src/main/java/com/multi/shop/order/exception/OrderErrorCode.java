package com.multi.shop.order.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import lombok.Getter;

@Getter
public enum OrderErrorCode implements ErrorCode {
    ORDER_IS_NOT_EXIST(400, "ORDER_01", "해당 주문 요청이 존재하지 않습니다"),

    ORDERS_REQUEST_EMPTY(400, "ORDER_02", "주문 요청 정보가 존재하지 않습니다."),
    ORDER_IS_ALREADY_CANCEL(400, "ORDER_03", "해당 주문은 이미 취소가 되었습니다.");

    private final int statusCode;
    private final String errorCode;
    private final String message;

    OrderErrorCode(int statusCode, String errorCode, String message) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}
