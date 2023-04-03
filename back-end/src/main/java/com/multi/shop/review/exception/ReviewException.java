package com.multi.shop.review.exception;

import com.multi.shop.global.exception.exception.ErrorCode;
import com.multi.shop.global.exception.exception.ShopException;

public class ReviewException extends ShopException {
    public ReviewException(ErrorCode code) {
        super(code);
    }
}
