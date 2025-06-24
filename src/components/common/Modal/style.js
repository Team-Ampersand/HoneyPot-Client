import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 24px;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ModalButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: #ffc300;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  margin-top: 8px;
  background: none;
  border: none;
  color: #999;
  font-size: 14px;
  cursor: pointer;
`;
