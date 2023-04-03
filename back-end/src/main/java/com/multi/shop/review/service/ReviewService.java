package com.multi.shop.review.service;

import com.multi.shop.order.domain.Status;
import com.multi.shop.order.domain.vo.OrderConfirmationVO;
import com.multi.shop.order.domain.vo.OrderProductVO;
import com.multi.shop.order.repository.OrderRepository;
import com.multi.shop.review.dto.request.ReviewSaveRequest;
import com.multi.shop.review.dto.response.ReviewFormResponse;
import com.multi.shop.review.dto.response.ReviewsResponse;
import com.multi.shop.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final OrderRepository orderRepository;

    public List<ReviewsResponse> findAll() {
        return reviewRepository.findAll()
                .stream()
                .map(ReviewsResponse::from)
                .toList();
    }

    public ReviewFormResponse findProductInfoById(Long orderId) {
        OrderProductVO findOrderProduct = orderRepository.findProductInfoById(orderId)
                .orElseThrow(RuntimeException::new);
        return ReviewFormResponse.from(findOrderProduct);
    }

    @Transactional
    public Long save(ReviewSaveRequest request) {
        // TODO: 이미 작성된 리뷰가 있으면 예외 처리
        orderRepository.orderConfirmation(OrderConfirmationVO.from(request.getOrderId(), Status.ORDER_CONFIRMATION));
        return reviewRepository.save(request);
    }
}
