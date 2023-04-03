package com.multi.shop.cart.mapper;

import com.multi.shop.cart.domain.Cart;
import com.multi.shop.cart.domain.vo.CartVO;
import com.multi.shop.cart.dto.request.CartChangeCheckedRequest;
import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.dto.request.CartChangeQuantityRequest;

import java.util.List;
import java.util.Optional;

public interface CartMapper {
    Long save(CartSaveRequest request);

    int findCartQuantityByMemberId(Long memberId);

    boolean existByProductId(CartSaveRequest request);


    void deleteById(Long id);

    List<CartVO> findByMemberId(Long memberId);

    void updateQuantity(CartChangeQuantityRequest request);

    void updateChecked(CartChangeCheckedRequest request);

    Optional<Cart> findById(Long id);
}
