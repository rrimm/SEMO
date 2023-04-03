package com.multi.shop.order.mapper;

import com.multi.shop.order.domain.vo.OrderConfirmationVO;
import com.multi.shop.order.domain.vo.OrderFindVO;
import com.multi.shop.order.domain.vo.OrderProductVO;
import com.multi.shop.order.domain.vo.OrderVO;
import com.multi.shop.order.dto.request.OrderCancelRequest;
import com.multi.shop.order.dto.request.OrderSaveRequest;

import java.util.List;
import java.util.Optional;

public interface OrderMapper {
    Long save(OrderSaveRequest request);

    Optional<OrderVO> findById(Long id);

    Optional<OrderProductVO> findProductInfoById(Long id);

    List<OrderFindVO> findAllByMemberId(Long memberId);

    void orderConfirmation(OrderConfirmationVO vo);

    void cancel(OrderCancelRequest request);
}
