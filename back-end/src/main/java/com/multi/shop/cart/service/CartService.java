package com.multi.shop.cart.service;

import com.multi.shop.cart.dto.response.CartQuantityResponse;
import com.multi.shop.cart.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartQuantityResponse findCartQuantityByMemberId(Long memberId) {
        int quantity = cartRepository.findCartQuantityByMemberId(memberId);
        return CartQuantityResponse.of(quantity);
    }
}
