package com.multi.shop.cart.mapper;

import com.multi.shop.cart.dto.request.CartSaveRequest;

public interface CartMapper {
    Long save(CartSaveRequest request);

    int findCartQuantityByMemberId(Long memberId);

    boolean existByProductId(CartSaveRequest request);
}
