package com.multi.shop.product.service;

import com.multi.shop.product.domain.vo.ProductVO;
import com.multi.shop.product.dto.response.ProductResponse;
import com.multi.shop.product.dto.response.ProductsResponse;
import com.multi.shop.product.exception.ProductErrorCode;
import com.multi.shop.product.exception.ProductException;
import com.multi.shop.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductResponse findByProductId(Long productId) {
        if (!productRepository.existByProductId(productId)) {
            throw new ProductException(ProductErrorCode.PRODUCT_NOT_FOUND);
        }
        ProductVO product = productRepository.findByProductId(productId);
        List<String> carousel = productRepository.findCarouselByProductId(productId);
        return ProductResponse.of(product, carousel);
    }

    public List<ProductsResponse> findRelatedProductsByProductId(Long productId) {
        List<ProductVO> relatedProducts = productRepository.findRelatedProductsByProductId(productId);
        return relatedProducts;
    }
}
