package com.multi.shop.order.mapper;

import com.multi.shop.order.domain.vo.OrderFindVO;
import com.multi.shop.order.domain.vo.OrderProductVO;
import com.multi.shop.order.domain.vo.OrderVO;
import com.multi.shop.order.dto.request.OrderCancelRequest;
import com.multi.shop.order.dto.request.OrderSaveRequest;

import java.util.List;
import java.util.Optional;

public interface OrderMapper {
    Long save(OrderSaveRequest request);

    List<OrderFindVO> findByMemberId(Long memberId);

    void cancel(OrderCancelRequest request);

    Optional<OrderProductVO> findProductInfoById(Long id);

    Optional<OrderVO> findById(Long id);
}
