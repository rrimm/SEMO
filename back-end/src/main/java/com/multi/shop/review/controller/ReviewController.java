package com.multi.shop.review.controller;

import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.response.ReviewFormResponse;
import com.multi.shop.review.dto.response.ReviewsResponse;
import com.multi.shop.review.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping("/api/review")
    public ResponseEntity<List<ReviewsResponse>> findAll() {
        List<ReviewsResponse> responses = reviewService.findAll();
        return ResponseEntity.ok(responses);
    }
    /* 검증 */
    @PostMapping("/auth/review")
    public ResponseEntity<Void> save(@RequestBody @Valid ReviewSaveRequest request) {
        reviewService.save(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/auth/review/form")
    public ResponseEntity<ReviewFormResponse> findProductInfo(@Param("orderId") Long orderId) {
        ReviewFormResponse response = reviewService.findProductInfoById(orderId);
        return ResponseEntity.ok(response);
    }
}
