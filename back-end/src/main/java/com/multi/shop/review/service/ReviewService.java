package com.multi.shop.review.service;

import com.multi.shop.order.domain.Status;
import com.multi.shop.order.domain.vo.OrderConfirmationVO;
import com.multi.shop.order.domain.vo.OrderProductVO;
import com.multi.shop.order.repository.OrderRepository;
import com.multi.shop.review.domain.Content;
import com.multi.shop.review.domain.Review;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.request.ReviewUpdateRequest;
import com.multi.shop.review.dto.response.ReviewFormResponse;
import com.multi.shop.review.dto.response.ReviewsResponse;
import com.multi.shop.review.exception.ReviewErrorCode;
import com.multi.shop.review.exception.ReviewException;
import com.multi.shop.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final OrderRepository orderRepository;

    @Transactional
    public Long save(ReviewSaveRequest request) {
        Content content = Content.from(request.getReviewContent());

        request.setReviewContent(content.getValue());
        orderRepository.orderConfirmation(OrderConfirmationVO.from(request.getOrderId(), Status.ORDER_CONFIRMATION));

        return reviewRepository.save(request);
    }

    public Review findById(Long id) {
        return reviewRepository.findById(id)
                .orElseThrow(() -> new ReviewException(ReviewErrorCode.REVIEW_NOT_EXIST));
    }

    public ReviewFormResponse findProductInfoById(Long orderId) {
        OrderProductVO findOrderProduct = orderRepository.findProductInfoById(orderId)
                .orElseThrow(() -> new ReviewException(ReviewErrorCode.REVIEW_NOT_EXIST));
        return ReviewFormResponse.from(findOrderProduct);
    }

    public List<ReviewsResponse> findAll() {
        return reviewRepository.findAll()
                .stream()
                .map(ReviewsResponse::from)
                .toList();
    }

    @Transactional
    public void updateReview(ReviewUpdateRequest request) {
        reviewRepository.updateReview(request);
    }

    @Transactional
    public void deleteById(Long id) {
        reviewRepository.deleteById(id);
    }
}
