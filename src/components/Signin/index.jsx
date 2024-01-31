import React from 'react';
import * as S from './style';
import { Input } from './Input/style';
import { Button } from '../../public/components/button/style';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  return (
    <S.Background>
      <S.SigninContainer>
        <S.ComponentContainer>
          <S.Title>LOGIN</S.Title>
          <S.InputContainer>
            <Input />
            <S.IconDiv1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
                  stroke="#707070"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </S.IconDiv1>
            <S.Mail>@gsm.hs.kr</S.Mail>
            <Input />
            <S.IconDiv2>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.5 10.5V6.75C16.5 5.55653 16.0259 4.41193 15.182 3.56802C14.3381 2.72411 13.1935 2.25 12 2.25C10.8065 2.25 9.66193 2.72411 8.81802 3.56802C7.97411 4.41193 7.5 5.55653 7.5 6.75V10.5M6.75 21.75H17.25C17.8467 21.75 18.419 21.5129 18.841 21.091C19.2629 20.669 19.5 20.0967 19.5 19.5V12.75C19.5 12.1533 19.2629 11.581 18.841 11.159C18.419 10.7371 17.8467 10.5 17.25 10.5H6.75C6.15326 10.5 5.58097 10.7371 5.15901 11.159C4.73705 11.581 4.5 12.1533 4.5 12.75V19.5C4.5 20.0967 4.73705 20.669 5.15901 21.091C5.58097 21.5129 6.15326 21.75 6.75 21.75Z"
                  stroke="#707070"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </S.IconDiv2>
            <S.IconDiv3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2.03589 12.322C1.96688 12.1146 1.96688 11.8904 2.03589 11.683C3.42289 7.51 7.35989 4.5 11.9999 4.5C16.6379 4.5 20.5729 7.507 21.9629 11.678C22.0329 11.885 22.0329 12.109 21.9629 12.317C20.5769 16.49 16.6399 19.5 11.9999 19.5C7.36189 19.5 3.42589 16.493 2.03589 12.322Z"
                  stroke="#707070"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                  stroke="#707070"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </S.IconDiv3>
          </S.InputContainer>
          <Button>로그인</Button>
          <S.SignupText onClick={() => navigate("/Signup")}>아직 회원이 아니신가요?</S.SignupText>
        </S.ComponentContainer>
      </S.SigninContainer>
    </S.Background>
  );
};

export default Signin;
