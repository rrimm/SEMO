package com.multi.shop.cart.controller;

import com.multi.shop.cart.dto.request.CartChangeCheckedRequest;
import com.multi.shop.cart.dto.request.CartChangeQuantityRequest;
import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.dto.response.CartQuantityResponse;
import com.multi.shop.cart.dto.response.CartsResponse;
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

    @GetMapping
    public ResponseEntity<CartsResponse> findCart(@Param("memberId") Long memberId) {
        CartsResponse response = cartService.findByMemberId(memberId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/quantity")
    public ResponseEntity<CartQuantityResponse> findCartQuantity(@Param("memberId") Long memberId) {
        CartQuantityResponse response = cartService.findCartQuantityByMemberId(memberId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/quantity")
    public ResponseEntity<Void> updateQuantity(@RequestBody @Valid CartChangeQuantityRequest request) {
        cartService.updateQuantity(request);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/check")
    public ResponseEntity<Void> updateChecked(@RequestBody @Valid CartChangeCheckedRequest request) {
        cartService.updateChecked(request);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteCart(@Param("memberId") Long memberId, @Param("cartId") Long cartId) {
        cartService.deleteCart(cartId);
        return ResponseEntity.ok().build();
    }
}
