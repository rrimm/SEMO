package com.multi.shop.global.exception.exception;

public interface ErrorCode {
    int getStatusCode();
    String getErrorCode();
    String getMessage();
}
