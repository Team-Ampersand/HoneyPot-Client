import { Monitor } from "../../asset";
import * as S from "./style";

const Onboarding = () => {
  return (
    <S.Background>
      <S.TextButtonContainer>
        <S.TextContainer>
          <S.WelcomeText>꿀팁이 쌓여 만들어지는 나만의 꿀단지 🍯</S.WelcomeText>
          <S.ExplainText>꿀단지를 통해 나만의 꿀팁을 공유해봐요.</S.ExplainText>
        </S.TextContainer>
        <S.Button>시작하기</S.Button>
      </S.TextButtonContainer>
      <S.SignContainer>
        <S.SignText>로그인</S.SignText>
        <S.ContourLine />
        <S.SignText>회원가입</S.SignText>
      </S.SignContainer>
      <S.MonitorImg src={Monitor} />
    </S.Background>
  );
};

export default Onboarding;
