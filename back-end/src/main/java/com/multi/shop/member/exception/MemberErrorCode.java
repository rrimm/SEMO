package com.multi.shop.member.exception;

import com.multi.shop.global.exception.exception.ErrorCode;

public enum MemberErrorCode implements ErrorCode {

    MEMBER_PASSWORD_PATTERN_MUST_BE_VALID(400, "MEMBER_01", "패스워드는 영어 대소문자와 숫자로 이루어져 있으며 8자 이상 16자 이하여야 합니다."),
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
