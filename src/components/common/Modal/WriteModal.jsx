import React from "react";
import * as S from "./style";

const WriteModal = ({ onClose, onAIWrite, onWrite }) => (
  <S.ModalBackground>
    <S.ModalBox>
      <S.ModalTitle>글 작성 방법 선택</S.ModalTitle>
      <S.ButtonRow>
        <S.ModalButton onClick={onAIWrite}>AI로 글 작성하기</S.ModalButton>
        <S.ModalButton onClick={onWrite}>글 작성하기</S.ModalButton>
      </S.ButtonRow>
      <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
    </S.ModalBox>
  </S.ModalBackground>
);

export default WriteModal;
