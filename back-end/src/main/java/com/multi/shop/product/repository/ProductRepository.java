package com.multi.shop.product.repository;

import com.multi.shop.product.domain.vo.FindRelatedProductVO;
import com.multi.shop.product.domain.vo.ProductVO;
import com.multi.shop.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class ProductRepository {
    private final ProductMapper productMapper;

    public ProductVO findByProductId(Long productId) {
        return productMapper.findByProductId(productId);
    }

    public boolean existByProductId(Long productId) {
        return productMapper.existByProductId(productId);
    }

    public List<String> findCarouselByProductId(Long productId) {
        return productMapper.findCarouselByProductId(productId);
    }

    public List<ProductVO> findRelatedProductsByProductId(FindRelatedProductVO vo) {
        return productMapper.findRelatedProductsByProductId(vo);
    }
}
