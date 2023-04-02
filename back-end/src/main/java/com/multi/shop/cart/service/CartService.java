package com.multi.shop.cart.service;

import com.multi.shop.cart.domain.vo.CartVO;
import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.dto.response.CartQuantityResponse;
import com.multi.shop.cart.dto.response.CartResponse;
import com.multi.shop.cart.exception.CartErrorCode;
import com.multi.shop.cart.exception.CartException;
import com.multi.shop.cart.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class CartService {

    private final CartRepository cartRepository;

    @Transactional
    public Long save(CartSaveRequest request) {
        // TODO: 카트에 이미 존재하는 상품인지 조회
        validateProductIdIsNotDuplicated(request);
        return cartRepository.save(request);
    }

    private void validateProductIdIsNotDuplicated(CartSaveRequest request) {
        if (cartRepository.existByProductId(request)) {
            throw new CartException(CartErrorCode.PRODUCT_ALREADY_EXIST_CART);
        }
    }

    public List<CartResponse> findByMemberId(Long memberId) {
        return cartRepository.findByMemberId(memberId)
                .stream()
                .map(CartResponse::from)
                .toList();
    }

    public CartQuantityResponse findCartQuantityByMemberId(Long memberId) {
        int quantity = cartRepository.findCartQuantityByMemberId(memberId);
        return CartQuantityResponse.of(quantity);
    }
}
