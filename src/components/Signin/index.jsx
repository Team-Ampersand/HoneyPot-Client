import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "../common";
import { EmailIcon, LockIcon, ShowIcon } from "../../asset";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.SigninContainer>
        <S.ComponentContainer>
          <S.Title>LOGIN</S.Title>
          <S.InputContainer>
            <S.SignInInput />
            <S.IconDiv1>
              <EmailIcon />
            </S.IconDiv1>
            <S.Mail>@gsm.hs.kr</S.Mail>
            <S.SignInInput />
            <S.IconDiv2>
              <LockIcon />
            </S.IconDiv2>
            <S.IconDiv3>
              <ShowIcon />
            </S.IconDiv3>
          </S.InputContainer>
          <Button text="로그인"></Button>
          <S.SignupText onClick={() => navigate("/signup")}>
            아직 회원이 아니신가요?
          </S.SignupText>
        </S.ComponentContainer>
      </S.SigninContainer>
    </S.Background>
  );
};

export default SignIn;
