package com.multi.shop.review.mapper;

import com.multi.shop.review.domain.Review;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.request.ReviewUpdateRequest;

import java.util.List;
import java.util.Optional;

public interface ReviewMapper {

    Long save(ReviewSaveRequest request);

    Optional<Review> findById(Long id);

    List<ReviewVO> findAll();

    void updateReview(ReviewUpdateRequest request);

    void deleteById(Long id);
}
