import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; //useNavigate : 쿼리스트링 / useLocation : URL 정보 받아옴
import * as S from './index.styled';

function BoardPage({ totalContents, contentsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalContents / contentsPerPage); // 전체 페이지 수
  const maxPages = Math.min(10, totalPages); // 최대 페이지 수 ( 디폴트 : 10 )
  const [currentGroup, setCurrentGroup] = useState(1); // 현재 그룹
  const [startPage, setStartPage] = useState(1); // 시작 페이지
  const [endPage, setEndPage] = useState(maxPages); // 끝 페이지
  
  const navigate = useNavigate();
  const location = useLocation(); // 현재 페이지 URL 정보 받아오기

  // 페이지 그룹 이동
  const changeGroup = (group) => {
    setCurrentGroup(group);
    setStartPage((group - 1) * maxPages + 1);
    setEndPage(Math.min(group * maxPages, totalPages));
    changePage((group - 1) * maxPages + 1); //그룹이 이동할때도 쿼리스트링 작동 (> 버튼)
  };

  const changePage = (page) => {
    setCurrentPage(page);
    navigate(`/review?page=${page}`) ; // 쿼리스트링 추가 
  };

  useEffect(()=>{
    const params = new URLSearchParams(location.search); // URL 쿼리스트링 파싱
    const page = Number(params.get('page')) || 1;
    setCurrentPage(page);
    const start = Math.floor((page - 1) / maxPages) * maxPages + 1;
    setStartPage(start); // 현재 페이지가 속한 그룹의 첫 페이지 계산
    setEndPage(Math.min(start + maxPages - 1, totalPages));
  },[location.search, setCurrentPage, maxPages, totalPages]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = Number(params.get('page')) || 1;
    if (currentPage !== page) { // 현재 페이지와 쿼리스트링의 page 값이 다른 경우
      setCurrentPage(page); // 쿼리스트링을 현재 페이지로 변경
    }
  }, [location.search, currentPage, setCurrentPage]);

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <S.BoardPageContainer>
      <S.BoardPageButton
        disabled={currentGroup === 1}
        onClick={() => changeGroup(currentGroup - 1)}
      >
        {'<'}
      </S.BoardPageButton>
      {startPage > maxPages && <S.BoardPageButton disabled={true}>...</S.BoardPageButton>}
      {pageNumbers.map((page) => (
        <S.BoardPageButton
          key={page}
          active={currentPage === page}
          onClick={() => changePage(page)} //버튼 클릭시 쿼리스트링 작동.
        >
          {page}
        </S.BoardPageButton>
      ))}
      {endPage < totalPages && <S.BoardPageButton disabled={true}>...</S.BoardPageButton>}
      <S.BoardPageButton
        disabled={currentGroup === Math.ceil(totalPages / maxPages)}
        onClick={() => changeGroup(currentGroup + 1)}
      >
        {'>'}
      </S.BoardPageButton>
    </S.BoardPageContainer>
  );
}

export default BoardPage;


