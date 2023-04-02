package com.multi.shop.review.controller;

import com.multi.shop.review.dto.response.ReviewFormResponse;
import com.multi.shop.order.service.OrderService;
import com.multi.shop.review.domain.dto.request.ReviewRequest;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ReviewController {
    private final ReviewService reviewService;
    private final OrderService orderService;

    @GetMapping("/review")
    public List<ReviewVO> getReviewList() {
        return reviewService.getReviewListWithProductAndMember();
    }

    @GetMapping("/review/category")
    public List<ReviewVO> getReviewListByCategory(@RequestParam String category) {
        return reviewService.getReviewListByCategory(category);
    }

    @PostMapping("/review")
    public int insertReview(@RequestBody ReviewRequest reviewRequest) {
        return reviewService.insertReview(reviewRequest);
    }

    @PutMapping("/review/{id}")
    public int updateReview(@PathVariable Long id, @RequestBody ReviewVO reviewVO) {
        return reviewService.updateReview(id, reviewVO.getContent());
    }

    @DeleteMapping("/review/{id}")
    public int deleteReviewById(@PathVariable Long id) {
        return reviewService.deleteReviewById(id);
    }

    @GetMapping("/auth/review/form")
    public ResponseEntity<ReviewFormResponse> findProductInfo(@Param("orderId") Long orderId) {
        ReviewFormResponse response = reviewService.findProductInfoById(orderId);
        return ResponseEntity.ok(response);
    }
}
