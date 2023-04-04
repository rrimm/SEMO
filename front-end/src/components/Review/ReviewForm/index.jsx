import { Button } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { API_PATH, BROWSER_PATH } from '../../../constants/path';
import { jwtToken } from '../../../stores/auth';
import Loading from '../../Loading';

import * as S from './index.styled';

function ReviewForm() {
  const token = useRecoilValue(jwtToken);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const orderId = params.get('orderId');
  const [data, setData] = useState({});

  const orderInfoRequest = useCallback(async () => {
    setLoading(true);
    if (orderId !== '') {
      await axios
        .get(API_PATH.REVIEW.FORM, {
          params: {
            orderId: orderId,
          },
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        })
        .then(response => {
          setData(response.data);
          setLoading(false);
        })
        .catch(() => {});
    }
  }, [orderId, token]);

  useEffect(() => {
    orderInfoRequest();
  }, [orderInfoRequest]);

  const changeContent = e => {
    setContent(e.target.value);
  };

  const encodeFileToBase64 = fileBlob => {
    if (fileBlob) {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onload = () => {
        setImage(reader.result + '');
      };
    } else {
      setImage('');
    }
  };

  const removeImage = () => {
    setImage('');
  };

  const cancel = () => {
    navigate(-1);
  };

  const saveReviewRequest = async () => {
    await axios
      .post(
        API_PATH.REVIEW.AUTH,
        {
          memberId: token.memberId,
          productId: data.productId,
          orderId: orderId,
          reviewImage: image,
          reviewContent: content,
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        },
      )
      .then(() => {
        alert('리뷰가 정상적으로 등록되었습니다.');
        navigate(BROWSER_PATH.MY);
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.ColumnWrapper>
        <h1>⭐ 상품 품질 리뷰</h1>
        <p>이 상품의 품질에 대해서 얼마나 만족하시나요?</p>
      </S.ColumnWrapper>
      <S.Line />
      <S.ColumnWrapper>
        <S.Pic src={data.productImage} alt="" />
        <S.RowWrapper>
          <S.Info>
            {data.orderId} / {data.productName}
          </S.Info>
        </S.RowWrapper>
      </S.ColumnWrapper>
      <S.Line />
      <S.RowWrapper>
        <S.Header>상세 리뷰</S.Header>
        <S.TextArea onChange={changeContent} />{' '}
        {/* post, put : reviewContent */}
      </S.RowWrapper>
      <S.TextCount>
        <S.TextCount>{content.length}</S.TextCount>
      </S.TextCount>
      <S.Line />
      <S.ColumnWrapper>
        <S.Header>사진 첨부</S.Header>
        {image !== '' ? (
          <S.Wrapper>
            <Button onClick={removeImage}>사진 삭제</Button>
            <h6>사진 미리 보기</h6>
            <S.Pic src={image} alt=""></S.Pic> {/* post, put : reviewImage */}
          </S.Wrapper>
        ) : (
          <input
            type={'file'}
            name={'image'}
            id={'file'}
            accept={'image/*'}
            onChange={e => {
              encodeFileToBase64(e.target.files[0]);
            }}
          />
        )}
      </S.ColumnWrapper>
      <S.ButtonWrapper>
        <Button color={'warning'} variant={'outlined'} onClick={cancel}>
          취소하기
        </Button>
        <Button
          color={'success'}
          variant={'contained'}
          onClick={saveReviewRequest}
        >
          등록하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
export default ReviewForm;
