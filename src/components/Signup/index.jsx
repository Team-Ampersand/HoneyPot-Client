import React, { useState } from 'react';
import * as S from './style';
import { Input } from './Input/style';
import { Button } from '../../public/components/button/style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPw, setCheckPw] = useState('');

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const pwChange = (e) => {
    setPassword(e.target.value);
  };

  const checkPwChange = (e) => {
    setCheckPw(e.target.value);
  } 

  const SignupButton = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SIGNIN_API}/signup`, {
        name: name,
        password: password,
        email: email,
      });
      navigate('/Signin');
    } catch (error) {
      if(password !== checkPw) {
        alert('비밀번호가 일치하지 않습니다.');
      }
      else if (error.response && error.response.status === 500) {
        alert('중복된 아이디나 이름이 있습니다.');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    }
  };

  return (
    <S.Background>
      <S.SigninContainer>
        <S.ComponentsContainer>
          <S.Title>SIGN UP</S.Title>
          <S.InputContainer>
            <S.InputContainer>
              <S.DataContainer>
                <S.InputText>닉네임</S.InputText>
                <Input onChange={nameChange} value={name} placeholder="닉네임을 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>이메일</S.InputText>
                <Input type='email' onChange={emailChange} value={email}  placeholder="아이디를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호</S.InputText>
                <Input type='password' onChange={pwChange} value={password} placeholder="비밀번호를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호 확인</S.InputText>
                <Input type='password' onChange={checkPwChange} value={checkPw} placeholder="비밀번호 입력해주세요." />
              </S.DataContainer>
            </S.InputContainer>
          </S.InputContainer>
          <Button onClick={SignupButton}>회원가입</Button>
        </S.ComponentsContainer>
      </S.SigninContainer>
    </S.Background>
  );
};

export default Signup;
