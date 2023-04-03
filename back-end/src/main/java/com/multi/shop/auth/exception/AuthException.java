package com.multi.shop.auth.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import com.multi.shop.global.exception.exception.ShopException;

public class AuthException extends ShopException {
    public AuthException(ErrorCode code) {
        super(code);
    }
}
