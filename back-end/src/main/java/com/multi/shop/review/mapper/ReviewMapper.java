package com.multi.shop.review.mapper;

import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.request.ReviewUpdateRequest;

import java.util.List;

public interface ReviewMapper {

    List<ReviewVO> findAll();

    Long save(ReviewSaveRequest request);

    Long updateReview(ReviewUpdateRequest request);

    void deleteById(Long id);
}
