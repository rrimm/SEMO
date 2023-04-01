package com.multi.shop.cart.controller;

import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.dto.response.CartQuantityResponse;
import com.multi.shop.cart.service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth/cart")
@RequiredArgsConstructor
@RestController
public class CartController {

    private final CartService cartService;

    @PostMapping
    public ResponseEntity<Void> save(@RequestBody @Valid CartSaveRequest request) {
        cartService.save(request);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/quantity")
    public ResponseEntity<CartQuantityResponse> findCartQuantityByMemberId(@Param("memberId") Long memberId) {
        CartQuantityResponse response = cartService.findCartQuantityByMemberId(memberId);
        return ResponseEntity.ok(response);
    }
}
