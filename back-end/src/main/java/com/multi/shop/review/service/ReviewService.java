package com.multi.shop.review.service;

import com.multi.shop.product.domain.vo.ProductVO;
import com.multi.shop.product.repository.ProductRepository;
import com.multi.shop.review.domain.dto.request.ReviewInsertDTO;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;

    public List<ReviewVO> getReviewList(){
        return reviewRepository.getReviewList();
    }

    public List<ReviewVO> getReviewListWithProductAndMember(){
        return  reviewRepository.getReviewListWithProductAndMember();
    }

    public List<ReviewVO> getReviewListByCategory(String category){
        return reviewRepository.getReviewListByCategory(category);
    }

    @Transactional
    public int updateReview(Long id, String content) {
        return reviewRepository.updateReview(id, content);
    }

    @Transactional
    public int insertReview(ReviewInsertDTO reviewInsertDTO) {
        return reviewRepository.insertReview(
                ReviewInsertDTO.builder()
                        .category(reviewInsertDTO.getCategory())
                        .content(reviewInsertDTO.getContent())
                        .image(reviewInsertDTO.getImage())
                        .memberId(reviewInsertDTO.getMemberId())
                        .productId(reviewInsertDTO.getProductId())
                        .build());
        //return reviewRepository.insertReview(newReviewInsertDTO);
    }

    @Transactional
    public int deleteReviewById(Long id) {
        return reviewRepository.deleteReviewById(id);
    }

}
