package com.multi.shop.order.repository;

import com.multi.shop.order.domain.vo.OrderFindVO;
import com.multi.shop.order.domain.vo.OrderProductVO;
import com.multi.shop.order.dto.request.OrderCancelRequest;
import com.multi.shop.order.dto.request.OrderSaveRequest;
import com.multi.shop.order.dto.response.ReviewFormResponse;
import com.multi.shop.order.mapper.OrderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class OrderRepository {

    private final OrderMapper orderMapper;

    public Long save(OrderSaveRequest request) {
        return orderMapper.save(request);
    }

    public List<OrderFindVO> findByMemberId(Long memberId) {
        return orderMapper.findByMemberId(memberId);
    }

    public void cancel(OrderCancelRequest request) {
        orderMapper.cancel(request);
    }

    public Optional<OrderProductVO> findProductInfoById(Long id) {
        return orderMapper.findProductInfoById(id);
    }
}
