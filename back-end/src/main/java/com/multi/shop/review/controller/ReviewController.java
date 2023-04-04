package com.multi.shop.review.controller;

import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.request.ReviewUpdateRequest;
import com.multi.shop.review.dto.response.ReviewFormResponse;
import com.multi.shop.review.dto.response.ReviewsResponse;
import com.multi.shop.review.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("/auth/review")
    public ResponseEntity<Void> save(@RequestBody @Valid ReviewSaveRequest request) {
        reviewService.save(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/api/review")
    public ResponseEntity<List<ReviewsResponse>> findAll() {
        List<ReviewsResponse> responses = reviewService.findAll();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/auth/review/form")
    public ResponseEntity<ReviewFormResponse> findProductInfo(@Param("orderId") Long orderId) {
        ReviewFormResponse response = reviewService.findProductInfoById(orderId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/auth/review")
    public ResponseEntity<Void> update(@RequestBody @Valid ReviewUpdateRequest request) {
        reviewService.updateReview(request);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/auth/review")
    public ResponseEntity<Void> delete(@Param("reviewId") Long reviewId) {
        reviewService.deleteById(reviewId);
        return ResponseEntity.ok().build();
    }
}
