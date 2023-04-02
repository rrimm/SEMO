package com.multi.shop.product.exception;

import com.multi.shop.global.exception.exception.ShopException;

public class ProductException extends ShopException {
    public ProductException(ProductErrorCode code) {
        super(code);
    }
}
