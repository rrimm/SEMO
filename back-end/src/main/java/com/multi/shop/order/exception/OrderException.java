package com.multi.shop.order.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import com.multi.shop.global.exception.exception.ShopException;

public class OrderException extends ShopException {
    public OrderException(ErrorCode code) {
        super(code);
    }
}
