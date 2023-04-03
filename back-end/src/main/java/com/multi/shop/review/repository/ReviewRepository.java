package com.multi.shop.review.repository;


import com.multi.shop.review.domain.Review;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.request.ReviewUpdateRequest;
import com.multi.shop.review.mapper.ReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class ReviewRepository {

    private final ReviewMapper reviewMapper;

    public Long save(ReviewSaveRequest request) {
        return reviewMapper.save(request);
    }

    public Optional<Review> findById(Long id) {
        return reviewMapper.findById(id);
    }

    public List<ReviewVO> findAll() {
        return reviewMapper.findAll();
    }

    public void updateReview(ReviewUpdateRequest request) {
        reviewMapper.updateReview(request);
    }

    public void deleteById(Long id) {
        reviewMapper.deleteById(id);
    }
}
