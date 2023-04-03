package com.multi.shop.review.service;

import com.multi.shop.order.domain.Status;
import com.multi.shop.order.domain.vo.OrderConfirmationVO;
import com.multi.shop.order.domain.vo.OrderProductVO;
import com.multi.shop.order.repository.OrderRepository;
import com.multi.shop.review.domain.dto.request.ReviewRequest;
import com.multi.shop.review.domain.vo.ReviewVO;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.response.ReviewFormResponse;
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
    private final OrderRepository orderRepository;

    public List<ReviewVO> getReviewList() {
        return reviewRepository.getReviewList();
    }

    public List<ReviewVO> getReviewListWithProductAndMember() {
        return reviewRepository.getReviewListWithProductAndMember();
    }

    public List<ReviewVO> getReviewListByCategory(String category) {
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

    public ReviewFormResponse findProductInfoById(Long orderId) {
        OrderProductVO findOrderProduct = orderRepository.findProductInfoById(orderId).orElseThrow(RuntimeException::new);
        return ReviewFormResponse.from(findOrderProduct);
    }

    @Transactional
    public Long save(ReviewSaveRequest request) {
        // TODO: 이미 작성된 리뷰가 있으면 예외 처리
        orderRepository.orderConfirmation(OrderConfirmationVO.from(request.getOrderId(), Status.ORDER_CONFIRMATION));
        return reviewRepository.save(request);
    }
}
