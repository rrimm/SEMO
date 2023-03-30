package com.multi.shop.member.exception;

import com.multi.shop.global.exception.exception.ErrorCode;

public enum MemberErrorCode implements ErrorCode {
    JOIN_INVALID_EMAIL(400, "JOIN_01", "이미 가입된 이메일입니다."),
    JOIN_INVALID_PHONE(400, "JOIN_02", "이미 가입된 전화번호입니다.");
    private final int statusCode;
    private final String errorCode;
    private final String message;

    MemberErrorCode(int statusCode, String errorCode, String message) {
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
