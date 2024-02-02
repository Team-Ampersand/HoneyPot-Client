import React from 'react';
import * as S from './style';
import Header from '../../public/components/Header';
import AddBoldStyleText from '../../asset/svg/AddBoldStyleText';
import AddH1Text from '../../asset/svg/AddH1Text';
import AddH2Text from '../../asset/svg/AddH2Text';
import AddH3Text from '../../asset/svg/AddH3Text';
import AddH4Text from '../../asset/svg/AddH4Text';
import OptionLine from '../../asset/svg/OptionLine';
import AddItalicText from '../../asset/svg/AddItalicText';
import TextMiddleline from '../../asset/svg/AddTextMiddleline';
import AddLinkText from '../../asset/svg/AddLinkText';
import AddImg from '../../asset/svg/AddImg';
import AddDevText from '../../asset/svg/AddDevText';

const Writing = () => {
  return (
    <S.Background>
      <Header />
      <S.WritingContainer>
        <S.FunctionContainer>
          <S.CategoryContainer>
            <S.CategoryTitle>카테고리</S.CategoryTitle>
            <S.CategorySelect>
              <S.CategoryOption>뷰티 / 패션</S.CategoryOption>
              <S.CategoryOption>책</S.CategoryOption>
              <S.CategoryOption>OTT</S.CategoryOption>
              <S.CategoryOption>생활</S.CategoryOption>
              <S.CategoryOption>건강</S.CategoryOption>
              <S.CategoryOption>여행</S.CategoryOption>
            </S.CategorySelect>
          </S.CategoryContainer>
          <S.OptionContainer>
            <S.HeaderOption>
              <AddH1Text />
              <AddH2Text />
              <AddH3Text />
              <AddH4Text />
            </S.HeaderOption>
            <OptionLine />
            <S.TextOption>
              <AddBoldStyleText />
              <AddItalicText />
              <TextMiddleline />
            </S.TextOption>
            <OptionLine />
            <S.AddOption>
              <AddLinkText />
              <AddImg />
              <AddDevText />
            </S.AddOption>
          </S.OptionContainer>
        </S.FunctionContainer>
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
