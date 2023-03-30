package com.multi.shop.global.exception;

import com.multi.shop.global.exception.dto.response.ExceptionResponse;
import com.multi.shop.global.exception.exception.ShopException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(ShopException.class)
    public ResponseEntity<ExceptionResponse> handleException(ShopException e) {
        int statusCode = e.getStatusCode();
        ExceptionResponse response = ExceptionResponse.from(e.getMessage());

        return ResponseEntity.status(statusCode).body(response);
    }
}
