package com.multi.shop.product.service;

import com.multi.shop.product.dto.response.ProductResponse;
import com.multi.shop.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ProductService {
    private final ProductRepository productRepository;


    //상품 정보 조회
    public ProductResponse findByProductId(Long productId) {
//TODO: 예외처리(존재하지 않는 상품을 조회 시 예외처리)
        productRepository.findByProductId(productId);
        return null;
    }

}
