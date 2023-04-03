package com.multi.shop.auth.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
public enum AuthErrorCode implements ErrorCode {
    TEST(401, "AUTH_01", "123");

    private final int statusCode;
    private final String errorCode;
    private final String message;

    AuthErrorCode(int statusCode, String errorCode, String message) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}
