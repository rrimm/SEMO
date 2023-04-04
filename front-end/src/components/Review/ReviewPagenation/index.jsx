import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './index.styled';
import { BROWSER_PATH } from '../../../constants/path';

function BoardPage({
  totalContents,
  contentsPerPage,
  currentPage,
  setCurrentPage,
  category,
}) {
  const totalPages = Math.ceil(totalContents / contentsPerPage);
  const maxPages = Math.min(10, totalPages);
  const [currentGroup, setCurrentGroup] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(maxPages);
  const navigate = useNavigate();
  const location = useLocation();

  const changeGroup = group => {
    setCurrentGroup(group);
    setStartPage((group - 1) * maxPages + 1);
    setEndPage(Math.min(group * maxPages, totalPages));
    changePage((group - 1) * maxPages + 1);
  };

  const changePage = page => {
    setCurrentPage(page);
    const params = new URLSearchParams(location.search);
    params.set('page', page);
    if (category) {
      params.set('category', category);
    }
    navigate(`/review?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = Number(params.get('page')) || 1;
    setCurrentPage(page);
    const start = Math.floor((page - 1) / maxPages) * maxPages + 1;
    setStartPage(start);
    setEndPage(Math.min(start + maxPages - 1, totalPages));
  }, [location.search, setCurrentPage, maxPages, totalPages]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = Number(params.get('page')) || 1;
    if (currentPage !== page) {
      setCurrentPage(page);
    }
  }, [location.search, currentPage, setCurrentPage]);

  useEffect(() => {
    if (category !== undefined) {
      const params = new URLSearchParams(location.search);
      const cat = params.get('category') || 'all';
      if (cat !== category) {
        navigate(`${BROWSER_PATH.REVIEW}?page=1&category=${category}`);
      }
    }
  }, [category, navigate, location.search]);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <S.BoardPageContainer>
      <S.BoardPageButton
        disabled={currentGroup === 1}
        onClick={() => changeGroup(currentGroup - 1)}
      >
        {'<'}
      </S.BoardPageButton>
      {startPage > maxPages && (
        <S.BoardPageButton disabled>...</S.BoardPageButton>
      )}
      {pageNumbers.map(page => (
        <S.BoardPageButton
          key={page}
          active={currentPage === page}
          onClick={() => changePage(page)}
        >
          {page}
        </S.BoardPageButton>
      ))}
      {endPage < totalPages && (
        <S.BoardPageButton disabled>...</S.BoardPageButton>
      )}
      <S.BoardPageButton
        disabled={
          currentGroup === Math.ceil(totalPages / maxPages) ||
          endPage === totalPages ||
          totalContents === 0
        }
        onClick={() => changeGroup(currentGroup + 1)}
      >
        {'>'}
      </S.BoardPageButton>
    </S.BoardPageContainer>
  );
}

export default BoardPage;
