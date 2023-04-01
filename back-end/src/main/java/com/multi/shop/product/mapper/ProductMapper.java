package com.multi.shop.product.mapper;

import com.multi.shop.product.domain.vo.ProductVO;

import java.util.List;


public interface ProductMapper {
    //상품 정보 조회
   ProductVO findByProductId(Long productId);

   List<String> findCarouselByProductId(Long productId);

}
