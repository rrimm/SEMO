package com.multi.shop.product.mapper;

import com.multi.shop.product.domain.Product;
import com.multi.shop.product.domain.vo.FindRelatedProductVO;
import com.multi.shop.product.dto.request.ProductSaveRequest;
import com.multi.shop.product.dto.response.StockUpdateRequest;

import java.util.List;
import java.util.Optional;

public interface ProductMapper {
    Optional<Product> findById(Long id);

    List<String> findCarouselById(Long id);

    List<Product> findRelatedProductsById(FindRelatedProductVO vo);

    List<Product> findBySearch(String search);

    void updateStock(StockUpdateRequest request);

    Long save(ProductSaveRequest request);
}
