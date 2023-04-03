package com.multi.shop.review.mapper;

import com.multi.shop.review.domain.dto.request.ReviewRequest;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.dto.request.ReviewSaveRequest;

import java.util.List;

public interface ReviewMapper {

    List<ReviewVO> getReviewList(); //리뷰 전체 조회

    List<ReviewVO> findAll(); //리뷰 조회(조인)

    int updateReview(Long id, String content); //리뷰 수정

    int insertReview(ReviewRequest reviewRequest); // 리뷰 작성

    int deleteReviewById(Long id); // 리뷰 삭제

    List<ReviewVO> getReviewListByCategory(String category); // 카테고리별 리뷰 조회

    Long save(ReviewSaveRequest request);
}
