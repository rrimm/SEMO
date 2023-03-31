package com.multi.shop.member.exception;

import com.multi.shop.global.exception.exception.ErrorCode;

public enum MemberErrorCode implements ErrorCode {

    MEMBER_PASSWORD_PATTERN_MUST_BE_VALID(400, "MEMBER_01", "패스워드는 영어 대소문자와 숫자로 이루어져 있으며 8자 이상 16자 이하여야 합니다."),
    MEMBER_PHONE_PATTERN_MUST_BE_VALID(400, "MEMBER_02", "올바르지 않은 전화번호 형식입니다. " +
            "올바른 형식은 식별번호 3자리 - 중앙 번호 3, 4자리 - 마지막 번호 4자리 이여야 합니다."),
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
