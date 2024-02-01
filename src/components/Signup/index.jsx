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

    const onChangeInput = (e) => {     
      const {
        target: { name, value },  
      } = e;
      if (name === 'name') {
        setName(value);
      } else if (name === 'email') {
        setEmail(value);
      } else if (name === 'password'){
        setPassword(value);
      } else if (name === 'checkPw'){
        setCheckPw(value);
      }
      
    };

  const handleSignup = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_CLIENT_API}/signup`, {
        name,
        password,
        email,
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
      <S.SignupContainer>
        <S.ComponentsContainer>
          <S.Title>SIGN UP</S.Title>
          <S.InputContainer>
            <S.InputContainer>
              <S.DataContainer>
                <S.InputText>닉네임</S.InputText>
                <Input type='text' name="name" onChange={onChangeInput} value={name} placeholder="닉네임을 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>이메일</S.InputText>
                <Input type='email' name="email" onChange={onChangeInput} value={email}  placeholder="아이디를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호</S.InputText>
                <Input type='password' name="password" onChange={onChangeInput} value={password} placeholder="비밀번호를 입력해주세요." />
              </S.DataContainer>
              <S.DataContainer>
                <S.InputText>비밀번호 확인</S.InputText>
                <Input type='password' name="checkPw" onChange={onChangeInput} value={checkPw} placeholder="비밀번호 입력해주세요." />
              </S.DataContainer>
            </S.InputContainer>
          </S.InputContainer>
          <Button onClick={handleSignup}>회원가입</Button>
        </S.ComponentsContainer>
      </S.SignupContainer>
    </S.Background>
  );
};

export default Signup;
