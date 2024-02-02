import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  background: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const SignupContainer = styled.div`
  width: 500px;
  height: 650px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
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

export const InputContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignUpInput = styled.input`
  width: 353px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(241, 241, 245, 0.8);
  border: none;
  padding-left: 15px;
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

export const InputText = styled.p`
  color: #212121;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
