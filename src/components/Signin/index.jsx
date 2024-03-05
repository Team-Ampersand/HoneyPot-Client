import React, { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';
import { EmailIcon, LockIcon, ShowIcon } from '../../asset';
import { instance } from '../../apis';
import TokenManager from '../../apis/TokenManager';

const SignIn = () => {
  const navigate = useNavigate();
  const tokenManager = new TokenManager();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [changePw, setChangePw] = useState('password');

  const onChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const checkPassword = (e) => {
    if (changePw === 'password') {
      setChangePw('text');
    } else setChangePw('password');
  };

  const handleLogin = async () => {
    try {
      const { data } = await instance.post('/auth/login', {
        username,
        password,
      });
      tokenManager.setTokens(data);
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('올바른 비밀번호를 입력해주세요.');
      } else if (error.response && error.response.status === 404) {
        console.log('가입된 회원이 없습니다.');
      }
    }
  };

  return (
    <S.Background>
      <S.SigninContainer>
        <S.ComponentContainer>
          <S.Title>LOGIN</S.Title>
          <S.InputContainer>
            <S.SignInInput type="text" name="username" onChange={onChangeInput} value={username} maxlength="30" placeholder="아이디를 입력해주세요" />
            <S.IconDiv1>
              <EmailIcon />
            </S.IconDiv1>
            <S.SignInInput type={changePw} name="password" onChange={onChangeInput} value={password} maxlength="30" placeholder="비밀번호를 입력해주세요" />
            <S.IconDiv2>
              <LockIcon />
            </S.IconDiv2>
            <S.IconDiv3 onClick={checkPassword}>
              <ShowIcon />
            </S.IconDiv3>
          </S.InputContainer>
          <Button clickFn={() => handleLogin()} text="로그인" />
          <S.SignupText onClick={() => navigate('/signup')}>아직 회원이 아니신가요?</S.SignupText>
        </S.ComponentContainer>
      </S.SigninContainer>
    </S.Background>
  );
};
export default SignIn;
