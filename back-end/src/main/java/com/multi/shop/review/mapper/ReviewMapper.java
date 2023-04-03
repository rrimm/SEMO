package com.multi.shop.review.mapper;

import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.dto.request.ReviewSaveRequest;

import java.util.List;

public interface ReviewMapper {

    List<ReviewVO> findAll();

    Long save(ReviewSaveRequest request);

    Long updateReview(Long id, String content);

}
