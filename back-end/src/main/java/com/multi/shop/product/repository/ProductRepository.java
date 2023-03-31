package com.multi.shop.product.repository;

import com.multi.shop.product.domain.vo.ProductVO;
import com.multi.shop.product.dto.response.ProductResponse;
import com.multi.shop.product.mapper.ProductMapper;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {
    ProductMapper productMapper;

    //상품 정보 조회
    public ProductVO findByProductId(Long productId) {

        return productMapper.findByProductId(productId);
    }

}
