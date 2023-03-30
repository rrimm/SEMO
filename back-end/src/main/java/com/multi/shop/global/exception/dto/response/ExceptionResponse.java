package com.multi.shop.global.exception.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ExceptionResponse {
    private final String message;

    public static ExceptionResponse from(String e) {
        return new ExceptionResponse(e);
    }
}
