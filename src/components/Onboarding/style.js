import styled from 'styled-components';

export const Background = styled.div`
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  background: linear-gradient(
    109deg,
    #ff8a00 -20.31%,
    rgba(255, 203, 32, 0.5) 135.05%
  );
`;

export const MonitorImg = styled.div`
  width: 1096px;
  height: 822px;
  flex-shrink: 0;
  position: absolute;
  bottom: 0px;
  right: 66px;
  background-image: url(${({ src }) => src});
`;

export const WelcomeText = styled.p`
  margin-block: 0em;
  color: #fff;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ExplainText = styled.p`
  margin-block: 0em;
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  position: absolute;
  left: 164px;
  top: 174px;
`;

export const Button = styled.button`
  width: 260px;
  height: 60px;
  flex-shrink: 0;

  border: none;
  border-radius: 12px;
  background: #fff;

  color: #ffc300;

  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;

export const SignText = styled.p`
  margin-block: 0em;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

export const ContourLine = styled.span`
  width: 2px;
  height: 20px;

  opacity: 0.2;
  background: #fff;
`;

export const SignContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  position: absolute;
  top: 48px;
  right: 80px;
`;
