package com.multi.shop.review.repository;


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

    public List<ReviewVO> findAll() {
        return reviewMapper.findAll();
    }

    public Long save(ReviewSaveRequest request) {
        return reviewMapper.save(request);
    }
}
