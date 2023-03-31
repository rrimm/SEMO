import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import * as S from "./index.styled";
import SizeGuide from "../../SizeGuide";

function SizeButton() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <S.Button className="btn" variant="outline-primary" onClick={handleShow}>사이즈 가이드</S.Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>사이즈 가이드</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SizeGuide/>
                    </Modal.Body>
                <Modal.Footer>
                    <S.CloseButton className="btn_close" variant="secondary" onClick={handleClose}>
                        닫기
                    </S.CloseButton>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SizeButton;