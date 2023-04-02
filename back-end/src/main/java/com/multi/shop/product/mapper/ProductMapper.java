package com.multi.shop.product.mapper;

import com.multi.shop.product.domain.vo.FindRelatedProductVO;
import com.multi.shop.product.domain.vo.ProductVO;
import com.multi.shop.product.dto.response.ProductsResponse;

import java.util.List;

public interface ProductMapper {
    ProductVO findByProductId(Long productId);

    boolean existByProductId(Long productId);

    List<String> findCarouselByProductId(Long productId);

    List<ProductVO> findRelatedProductsByProductId(FindRelatedProductVO vo);

    List<ProductVO> find(String search);
}
