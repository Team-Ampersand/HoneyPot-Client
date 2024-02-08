import React from 'react';
import * as S from './style';
import Header from '../Header';
import { ThumbnailImg } from '../../asset';

const Thumbnail = () => {
  return (
    <S.Background>
      <Header />
      <S.MainContainer>
        <S.ThumbnailContainer>
          <S.TextContainer>
            <S.Text>썸네일 업로드</S.Text>
          </S.TextContainer>
          <S.uploadImgContainer>
            <ThumbnailImg />
          </S.uploadImgContainer>
          <S.ButtonContainer>
            <S.SubmitButton>등록하기</S.SubmitButton>
          </S.ButtonContainer>
        </S.ThumbnailContainer>
      </S.MainContainer>
    </S.Background>
  );
};

export default Thumbnail;
