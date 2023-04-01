package com.multi.shop.product.repository;

import com.multi.shop.product.domain.vo.ProductVO;
import com.multi.shop.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class ProductRepository {
    private final ProductMapper productMapper;

    //상품 정보 조회
    public ProductVO findByProductId(Long productId) {

        return productMapper.findByProductId(productId);
    }

    public List<String> findCarouselByProductId(Long productId) {
        return productMapper.findCarouselByProductId(productId);
    }

}
