package com.multi.shop.cart.repository;

import com.multi.shop.cart.domain.vo.CartVO;
import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class CartRepository {
    private final CartMapper cartMapper;
    public int findCartQuantityByMemberId(Long memberId) {
        return cartMapper.findCartQuantityByMemberId(memberId);
    }

    public Long save(CartSaveRequest request) {
        return cartMapper.save(request);
    }

    public boolean existByProductId(CartSaveRequest request) {
        return cartMapper.existByProductId(request);
    }

    public List<CartVO> findByMemberId(Long memberId) {
        return cartMapper.findByMemberId(memberId);
    }
}
