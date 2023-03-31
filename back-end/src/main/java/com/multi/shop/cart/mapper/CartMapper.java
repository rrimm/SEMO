package com.multi.shop.cart.mapper;

public interface CartMapper {
    int findCartQuantityByMemberId(Long memberId);
}
