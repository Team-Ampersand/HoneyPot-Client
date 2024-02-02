import * as S from "./style";

const SignButton = ({ text, clickFn }) => {
  return <S.Button onClick={clickFn}>{text}</S.Button>;
};

export default SignButton;
