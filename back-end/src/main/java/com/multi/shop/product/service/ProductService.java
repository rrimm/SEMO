package com.multi.shop.product.service;

import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.product.domain.Product;
import com.multi.shop.product.domain.vo.FindRelatedProductVO;
import com.multi.shop.product.dto.response.ProductResponse;
import com.multi.shop.product.dto.response.ProductsResponse;
import com.multi.shop.product.dto.response.StockUpdateRequest;
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

    public Product findById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductException(ProductErrorCode.PRODUCT_NOT_FOUND));
    }

    public ProductResponse findDetailById(Long id) {
        Product findProduct = findById(id);
        List<String> carousel = productRepository.findCarouselById(id);
        return ProductResponse.of(findProduct, carousel);
    }

    public List<ProductsResponse> findRelatedProductsById(Long id) {
        Product findProduct = findById(id);
        FindRelatedProductVO vo = FindRelatedProductVO.builder()
                .id(findProduct.getId())
                .category(findProduct.getCategory())
                .target(findProduct.getTarget())
                .build();
        List<Product> relatedProducts = productRepository.findRelatedProductsById(vo);
        return relatedProducts.stream()
                .map(ProductsResponse::from)
                .toList();
    }

    public List<ProductsResponse> findBySearch(String search) {
        return productRepository.findBySearch(search)
                .stream()
                .map(ProductsResponse::from)
                .toList();
    }

    @Transactional
    public void updateStock(OrderSaveRequest request) {
        Product findProduct = findById(request.getProductId());
        validateQuantityIsGreaterThanStock(request.getQuantity(), findProduct.getStock());

        StockUpdateRequest stockUpdateRequest = StockUpdateRequest.from(request.getProductId(),
                findProduct.getStock() - request.getQuantity());
        productRepository.updateStock(stockUpdateRequest);
    }

    private void validateQuantityIsGreaterThanStock(int quantity, int stock) {
        if (quantity > stock) {
            throw new ProductException(ProductErrorCode.ORDER_QUANTITY_GREATER_THEN_PRODUCT_STOCK);
        }
    }
}
