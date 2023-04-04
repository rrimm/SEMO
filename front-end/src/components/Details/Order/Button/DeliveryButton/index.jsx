import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as S from './index.styled';

function DeliveryButton() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = event => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <S.Button onClick={handleClick}>배송 방법</S.Button>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <S.StyledPopover>
          <Popover id="popover-contained">
            <S.PopoverText>
              <strong>택배배송</strong>
              <br /> 50000원 이상 구매 시 무료배송 / 18시 이전 주문 시 오늘 출고
              예정
              <br />
              <strong>매장픽업</strong>
              <br /> 온라인 구매 후 지정 매장에서 수령
            </S.PopoverText>
          </Popover>
        </S.StyledPopover>
      </Overlay>
    </div>
  );
}

export default DeliveryButton;
