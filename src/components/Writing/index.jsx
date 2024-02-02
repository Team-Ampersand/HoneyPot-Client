import React from 'react';
import * as S from './style';
import Header from '../../public/components/Header';
import Border from '../../asset/svg/border';
import H1 from '../../asset/svg/H1';
import H2 from '../../asset/svg/H2';
import H3 from '../../asset/svg/H3';
import H4 from '../../asset/svg/H4';
import Line from '../../asset/svg/Line';
import TE from '../../asset/svg/TE';
import Textmiddleline from '../../asset/svg/Textmiddleline';
import Link from '../../asset/svg/Link';
import Img from '../../asset/svg/Img';
import Dev from '../../asset/svg/Dev';

const Writing = () => {
  return (
    <S.Background>
      <Header />
      <S.WritingContainer>
        <S.HeaderContainer>
          <S.categoryContainer>
            <S.categoryTitle>카테고리</S.categoryTitle>
            <S.categorySelect>
              <S.categoryOption>뷰티 / 패션</S.categoryOption>
              <S.categoryOption>책</S.categoryOption>
              <S.categoryOption>OTT</S.categoryOption>
              <S.categoryOption>생활</S.categoryOption>
              <S.categoryOption>건강</S.categoryOption>
              <S.categoryOption>여행</S.categoryOption>
            </S.categorySelect>
          </S.categoryContainer>
          <S.optionContainer>
            <S.HeaderOption>
              <H1 />
              <H2 />
              <H3 />
              <H4 />
            </S.HeaderOption>
            <Line />
            <S.TextOption>
              <Border />
              <TE />
              <Textmiddleline />
            </S.TextOption>
            <Line />
            <S.AddOption>
              <Link />
              <Img />
              <Dev />
            </S.AddOption>
          </S.optionContainer>
        </S.HeaderContainer>
        <S.Title placeholder="제목을 입력하세요." />
        <S.TextDetail placeholder="내용을 작성해주세요."></S.TextDetail>
        <S.ButtonContainer>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.ButtonContainer>
      </S.WritingContainer>
    </S.Background>
  );
};

export default Writing;
