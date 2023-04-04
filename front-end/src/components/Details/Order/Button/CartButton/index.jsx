import axios from 'axios';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Modal from 'react-bootstrap/Modal';
import * as S from './index.styled';
import { API_PATH, BROWSER_PATH } from '../../../../../constants/path';
import { jwtToken } from '../../../../../stores/auth';
import { useNavigate } from 'react-router-dom';

function CartButton({ productId }) {
  const token = useRecoilValue(jwtToken);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const addCartRequest = async () => {
    if (token === null) {
      navigate(BROWSER_PATH.LOGIN);
    }
    await axios
      .post(
        `${API_PATH.CART.BASE}`,
        {
          productId: productId,
          memberId: token.memberId,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        },
      )
      .then(() => {
        handleShow();
      })
      .catch(error => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
          return;
        }
      });
  };

  const goCart = () => {
    navigate(BROWSER_PATH.CART);
    window.location.reload();
  };

  return (
    <div>
      <S.Button variant="outline-primary" onClick={addCartRequest}>
        장바구니 담기
      </S.Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <S.MessageContainer>장바구니에 상품이 담겼습니다.</S.MessageContainer>
        </Modal.Body>
        <Modal.Footer>
          <S.ButtonContainer>
            <S.CloseButton
              className="btn_close"
              variant="secondary"
              onClick={handleClose}
            >
              쇼핑 계속하기
            </S.CloseButton>
            <S.ToCartButton className="cart" variant="third" onClick={goCart}>
              장바구니로 이동
            </S.ToCartButton>
          </S.ButtonContainer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartButton;
