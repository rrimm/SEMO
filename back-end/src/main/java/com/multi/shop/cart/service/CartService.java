package com.multi.shop.cart.service;

import com.multi.shop.cart.domain.Cart;
import com.multi.shop.cart.domain.Quantity;
import com.multi.shop.cart.dto.request.CartChangeCheckedRequest;
import com.multi.shop.cart.dto.request.CartChangeQuantityRequest;
import com.multi.shop.cart.dto.request.CartSaveRequest;
import com.multi.shop.cart.dto.response.CartQuantityResponse;
import com.multi.shop.cart.dto.response.CartResponse;
import com.multi.shop.cart.dto.response.CartsResponse;
import com.multi.shop.cart.exception.CartErrorCode;
import com.multi.shop.cart.exception.CartException;
import com.multi.shop.cart.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class CartService {

    private final CartRepository cartRepository;

    @Transactional
    public Long save(CartSaveRequest request) {
        validateProductIdIsNotDuplicated(request);
        return cartRepository.save(request);
    }

    private void validateProductIdIsNotDuplicated(CartSaveRequest request) {
        if (cartRepository.existByProductId(request)) {
            throw new CartException(CartErrorCode.PRODUCT_ALREADY_EXIST_CART);
        }
    }

    public Cart findById(Long id) {
        return cartRepository.findById(id)
                .orElseThrow(() -> new CartException(CartErrorCode.CART_NOT_EXIST));
    }

    public CartsResponse findByMemberId(Long memberId) {
        List<CartResponse> carts = cartRepository.findByMemberId(memberId)
                .stream()
                .map(CartResponse::from)
                .toList();
        int price = sumPrice(carts);
        boolean courierFee = isCourierFee(price);
        return CartsResponse.from(carts, price, courierFee);
    }

    private int sumPrice(List<CartResponse> carts) {
        return carts.stream()
                .filter(CartResponse::isChecked)
                .mapToInt(cart -> cart.getQuantity() * cart.getProductPrice())
                .sum();
    }

    private boolean isCourierFee(int price) {
        return 50_000 > price;
    }

    public CartQuantityResponse findCartQuantityByMemberId(Long memberId) {
        int quantity = cartRepository.findCartQuantityByMemberId(memberId);
        return CartQuantityResponse.of(quantity);
    }

    @Transactional
    public void updateQuantity(CartChangeQuantityRequest request) {
        validateCartIsNotExist(request.getId());
        request.setQuantity(Quantity.from(request.getQuantity()).getValue());
        cartRepository.updateQuantity(request);
    }

    @Transactional
    public void updateChecked(CartChangeCheckedRequest request) {
        Cart findCart = findById(request.getId());
        request.setChecked(!findCart.isChecked());
        cartRepository.updateChecked(request);
    }

    @Transactional
    public void deleteCart(Long id) {
        validateCartIsNotExist(id);
        cartRepository.deleteById(id);
    }

    private void validateCartIsNotExist(Long id) {
        if (!cartRepository.existById(id)) {
            throw new CartException(CartErrorCode.CART_NOT_EXIST);
        }
    }
}
