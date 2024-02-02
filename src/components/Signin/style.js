import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  background: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const SigninContainer = styled.div`
  width: 500px;
  height: 464px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ComponentContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
`;

export const Title = styled.p`
  color: #ffc300;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;

export const SignupText = styled.p`
  margin-top: 16px;
  color: #424242;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const IconDiv1 = styled.div`
  position: absolute;
  top: 18px;
  left: 19px;
`;
export const IconDiv2 = styled.div`
  position: absolute;
  top: 105px;
  left: 19px;
`;
export const IconDiv3 = styled.div`
  position: absolute;
  top: 107px;
  right: 14px;
`;
export const Mail = styled.p`
  color: #707070;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;

  top: 7px;
  right: 14px;
`;

export const SignInInput = styled.input`
  width: 338px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(241, 241, 245, 0.8);
  border: none;
  padding-left: 50px;
  color: #707070;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;