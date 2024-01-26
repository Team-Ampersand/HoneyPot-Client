import React from 'react';
import * as S from './style';
import { Input } from './Input/style';
import { Button } from '../../public/components/button/style';

const Signup = () => {
  return (
    <S.Background>
      <S.SigninContainer>
        <S.ComponentsContainer>
          <S.Title>SIGN UP</S.Title>
          <S.InputContainer>
            <S.InputContainer>
              <S.DataContainer>
                <S.InputText>닉네임</S.InputText>
                <Input placeholder="닉네임을 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>아이디</S.InputText>
                <Input placeholder="아이디를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호</S.InputText>
                <Input placeholder="비밀번호를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호 확인</S.InputText>
                <Input placeholder="비밀번호 입력해주세요." />
              </S.DataContainer>
            </S.InputContainer>
          </S.InputContainer>
          <Button>회원가입</Button>
        </S.ComponentsContainer>
      </S.SigninContainer>
    </S.Background>
  );
};

export default Signup;
