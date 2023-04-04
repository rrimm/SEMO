package com.multi.shop.product.repository;

import com.multi.shop.product.domain.Product;
import com.multi.shop.product.domain.vo.FindRelatedProductVO;
import com.multi.shop.product.dto.request.ProductSaveRequest;
import com.multi.shop.product.dto.response.StockUpdateRequest;
import com.multi.shop.product.mapper.ProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class ProductRepository {
    private final ProductMapper productMapper;

    public Long save(ProductSaveRequest request) {
        return productMapper.save(request);
    }

    public List<String> findCarouselById(Long id) {
        return productMapper.findCarouselById(id);
    }

    public List<Product> findRelatedProductsById(FindRelatedProductVO vo) {
        return productMapper.findRelatedProductsById(vo);
    }

    public List<Product> findBySearch(String search) {
        return productMapper.findBySearch(search);
    }

    public void updateStock(StockUpdateRequest request) {
        productMapper.updateStock(request);
    }

    public Optional<Product> findById(Long id) {
        return productMapper.findById(id);
    }
}
