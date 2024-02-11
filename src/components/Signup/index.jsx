import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../common/Auth/Button';
import * as S from './style';

const SignUp = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPw, setCheckPw] = useState('');

  const onChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'nickname') {
      setNickname(value);
    } else if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'checkPw') {
      setCheckPw(value);
    }
  };

  const handleSignup = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_CLIENT_API}/signup`, {
        password,
        username,
        nickname
      });
      navigate('/signin');
    } catch (error) {
      if (password !== checkPw) {
        alert('비밀번호가 일치하지 않습니다.');
      } else if (error.response && error.response.status === 500) {
        alert('중복된 아이디나 이름이 있습니다.');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    }
  };

  return (
    <S.Background>
      <S.SignupContainer>
        <S.ComponentsContainer>
          <S.Title>SIGN UP</S.Title>
          <S.InputContainer>
            <S.InputContainer>
              <S.DataContainer>
                <S.InputText>닉네임</S.InputText>
                <S.SignUpInput type="text" name="nickname" onChange={onChangeInput} value={nickname} placeholder="닉네임을 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>아이디</S.InputText>
                <S.SignUpInput type="text" name="username" onChange={onChangeInput} value={username} placeholder="아이디를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호</S.InputText>
                <S.SignUpInput type="password" name="password" onChange={onChangeInput} value={password} placeholder="비밀번호를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호 확인</S.InputText>
                <S.SignUpInput type="password" name="checkPw" onChange={onChangeInput} value={checkPw} placeholder="비밀번호를 입력해주세요." />
              </S.DataContainer>
            </S.InputContainer>
          </S.InputContainer>
          <Button clickFn={() => handleSignup()} text="회원가입"></Button>
        </S.ComponentsContainer>
      </S.SignupContainer>
    </S.Background>
  );
};

export default SignUp;
