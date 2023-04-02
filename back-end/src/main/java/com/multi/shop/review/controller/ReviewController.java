package com.multi.shop.review.controller;

import com.multi.shop.review.domain.dto.request.ReviewRequest;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping("/review")
    public List<ReviewVO> getReviewList(){
        return reviewService.getReviewListWithProductAndMember();
    }

    @GetMapping("/review/category")
    public List<ReviewVO> getReviewListByCategory(@RequestParam String category){
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
}
