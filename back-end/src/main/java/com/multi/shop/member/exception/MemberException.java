package com.multi.shop.member.exception;

import com.multi.shop.global.exception.exception.ShopException;

public class MemberException extends ShopException {
    public MemberException(MemberErrorCode code) {
        super(code);
    }
}
