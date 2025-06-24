import styled from "styled-components";

export const Container = styled.div`
  max-width: 540px;
  margin: 60px auto;
  padding: 32px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: #222;
  font-weight: 700;
`;

export const PromptTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 14px;
  font-size: 16px;
  resize: vertical;
  font-family: inherit;
`;

export const GenerateButton = styled.button`
  width: 100%;
  padding: 12px 0;
  border-radius: 8px;
  border: none;
  background: #ffc300;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
  margin-bottom: 18px;
  transition: background 0.2s;
`;

export const ResultContainer = styled.div`
  width: 100%;
  margin-top: 18px;
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  word-break: break-all;
`;

export const ResultTitle = styled.h3`
  margin: 0 0 12px 0;
  color: #222;
`;

export const ResultContent = styled.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 16px;
  color: #444;
  line-height: 1.7;
  max-height: 320px;
  overflow-y: auto;
`;

export const ConfirmButton = styled.button`
  margin-top: 18px;
  width: 100%;
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  background: #222;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
`;
