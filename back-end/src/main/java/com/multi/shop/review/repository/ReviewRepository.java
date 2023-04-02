package com.multi.shop.review.repository;


import com.multi.shop.review.domain.dto.request.ReviewRequest;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.mapper.ReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class ReviewRepository {

    private final ReviewMapper reviewMapper;

    public List<ReviewVO> getReviewList() {
        return reviewMapper.getReviewList();
    }

    public List<ReviewVO> getReviewListWithProductAndMember() {
        return reviewMapper.getReviewListWithProductAndMember();
    }

    public List<ReviewVO> getReviewListByCategory(String category) {
        return reviewMapper.getReviewListByCategory(category);
    }

    public int updateReview(Long id, String content) {
        return reviewMapper.updateReview(id, content);
    }

    public int insertReview(ReviewRequest reviewRequest) {
        return reviewMapper.insertReview(reviewRequest);
    }

    public int deleteReviewById(Long id) {
        return reviewMapper.deleteReviewById(id);
    }

    public Long save(ReviewSaveRequest request) {
        return reviewMapper.save(request);
    }
}
