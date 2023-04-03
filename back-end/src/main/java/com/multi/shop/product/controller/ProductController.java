package com.multi.shop.product.controller;

import com.multi.shop.product.dto.response.ProductResponse;
import com.multi.shop.product.dto.response.ProductsResponse;
import com.multi.shop.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
public class ProductController {
    private final ProductService productService;

    @GetMapping("/api/product")
    public ResponseEntity<List<ProductsResponse>> find(@Param("search") String search) {
        List<ProductsResponse> response = productService.find(search);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/product/{id}")
    public ResponseEntity<ProductResponse> findByProductId(@PathVariable Long id) {
        ProductResponse response = productService.findById(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/product/related/{id}")
    public ResponseEntity<List<ProductsResponse>> findRelatedProducts(@PathVariable Long id) {
        List<ProductsResponse> response = productService.findRelatedProductsByProductId(id);
        return ResponseEntity.ok(response);
    }
}