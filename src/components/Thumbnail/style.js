import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  background: #f7f8fa;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ThumbnailContainer = styled.div`
  width: 928px;
  height: 622px;
  background-color: #fff;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TextContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-start;
`;

export const Text = styled.p`
  font-family: pretendard;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const uploadImgContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: #f1f1f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  width: 104px;
  height: 36px;

  border: none;
  border-radius: 10px;
  background: #ffc300;

  color: #fff;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
