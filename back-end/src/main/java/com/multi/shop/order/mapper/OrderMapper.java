package com.multi.shop.order.mapper;

import com.multi.shop.order.domain.vo.OrderFindVO;
import com.multi.shop.order.dto.request.OrderCancelRequest;
import com.multi.shop.order.dto.request.OrderSaveRequest;

import java.util.List;

public interface OrderMapper {
    Long save(OrderSaveRequest request);

    List<OrderFindVO> findByMemberId(Long memberId);

    void cancel(OrderCancelRequest request);
}
