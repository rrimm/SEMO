package com.multi.shop.review.repository;


import com.multi.shop.review.domain.dto.request.ReviewInsertDTO;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.mapper.ReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class ReviewRepository {

    private final ReviewMapper reviewMapper;

    public List<ReviewVO> getReviewList(){
        return reviewMapper.getReviewList();
    }

    public List<ReviewVO> getReviewListWithProductAndMember(){
        return  reviewMapper.getReviewListWithProductAndMember();
    }

    public List<ReviewVO> getReviewListByCategory(String category){
        return  reviewMapper.getReviewListByCategory(category);
    }

    @Transactional
    public int updateReview(Long id, String content){
        return reviewMapper.updateReview(id, content);
    }

    public int insertReview(ReviewInsertDTO reviewInsertDTO){
        return  reviewMapper.insertReview(reviewInsertDTO);
    }

    public int deleteReviewById(Long id){
        return reviewMapper.deleteReviewById(id);
    }


}
