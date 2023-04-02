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
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductResponse findByProductId(Long productId) {
        validateProductIsExistById(productId);
        ProductVO product = productRepository.findByProductId(productId);
        List<String> carousel = productRepository.findCarouselByProductId(productId);
        return ProductResponse.of(product, carousel);
    }

    private void validateProductIsExistById(Long productId) {
        if (!productRepository.existByProductId(productId)) {
            throw new ProductException(ProductErrorCode.PRODUCT_NOT_FOUND);
        }
    }

    public List<ProductsResponse> findRelatedProductsByProductId(Long productId) {
        List<ProductVO> relatedProducts = productRepository.findRelatedProductsByProductId(productId);
        return relatedProducts.stream()
                .map(ProductsResponse::from)
                .collect(Collectors.toUnmodifiableList());
    }
}
