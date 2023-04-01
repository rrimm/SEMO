package com.multi.shop.cart.mapper;

import com.multi.shop.cart.domain.vo.CartVO;
import com.multi.shop.cart.dto.request.CartSaveRequest;

import java.util.List;

public interface CartMapper {
    Long save(CartSaveRequest request);

    int findCartQuantityByMemberId(Long memberId);

    boolean existByProductId(CartSaveRequest request);

    List<CartVO> findByMemberId(Long memberId);
}
