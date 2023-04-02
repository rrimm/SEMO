package com.multi.shop.review.controller;

import com.multi.shop.review.domain.dto.request.ReviewInsertDTO;
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
    public int insertReview(@RequestBody ReviewInsertDTO reviewInsertDTO) {
        return reviewService.insertReview(reviewInsertDTO);
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
