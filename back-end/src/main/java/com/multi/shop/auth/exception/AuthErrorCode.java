package com.multi.shop.auth.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import lombok.Getter;

@Getter
public enum AuthErrorCode implements ErrorCode {
    AUTH_INVALID_JWT_SIGNATURE(401, "AUTH_01", "잘못된 JWT 서명입니다."),
    AUTH_EXPIRED_JWT(401, "AUTH_02", "만료된 JWT 토큰입니다."),
    AUTH_JWT_TOKEN_NOT_SUPPORT(401, "AUTH_03", "지원되지 않는 JWT 토큰입니다."),
    AUTH_WRONG_JWT(401, "AUTH_04", "JWT 토큰이 잘못되었습니다"),
    AUTH_JWT_WITHOUT_AUTHORIZATION_INFO(401, "AUTH_05", "권한 정보가 없는 토큰입니다.");

    private final int statusCode;
    private final String errorCode;
    private final String message;

    AuthErrorCode(int statusCode, String errorCode, String message) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }
}
