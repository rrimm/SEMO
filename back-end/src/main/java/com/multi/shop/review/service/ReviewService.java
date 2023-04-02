package com.multi.shop.review.service;

import com.multi.shop.product.repository.ProductRepository;
import com.multi.shop.review.domain.dto.request.ReviewRequest;
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
    public int insertReview(ReviewRequest reviewRequest) {
        ReviewRequest request = ReviewRequest.builder()
                .category(reviewRequest.getCategory())
                .content(reviewRequest.getContent())
                .image(reviewRequest.getImage())
                .memberId(reviewRequest.getMemberId())
                .productId(reviewRequest.getProductId())
                .build();

        return reviewRepository.insertReview(request);
    }

    @Transactional
    public int deleteReviewById(Long id) {
        return reviewRepository.deleteReviewById(id);
    }

}
