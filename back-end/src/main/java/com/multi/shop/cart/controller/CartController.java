package com.multi.shop.cart.controller;

import com.multi.shop.cart.dto.response.CartQuantityResponse;
import com.multi.shop.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth/cart")
@RequiredArgsConstructor
@RestController
public class CartController {

    private final CartService cartService;

    @GetMapping("/quantity")
    public ResponseEntity<CartQuantityResponse> findCartQuantityByMemberId(@Param("memberId") Long memberId) {
        CartQuantityResponse response = cartService.findCartQuantityByMemberId(memberId);
        return ResponseEntity.ok().body(response);
    }
}
