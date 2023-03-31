package com.multi.shop.order.controller;

import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.order.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/auth/order")
@RequiredArgsConstructor
@RestController
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody @Valid OrderSaveRequest request) {
        orderService.save(request);
        return ResponseEntity.ok().build();
    }
}
