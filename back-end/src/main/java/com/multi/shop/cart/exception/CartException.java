package com.multi.shop.cart.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import com.multi.shop.global.exception.exception.ShopException;

public class CartException extends ShopException {
    public CartException(ErrorCode code) {
        super(code);
    }
}
