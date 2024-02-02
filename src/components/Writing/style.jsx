import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  background: #f7f8fa;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  flex-direction: column;
  gap: 30px;
`;

export const WritingContainer = styled.div`
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

export const FunctionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 146px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
`;

export const CategoryTitle = styled.p`
  font-family: pretendard;
  color: #707070;
  font-size: 20px;
  font-weight: 500;
`;

export const CategorySelect = styled.select`
  cursor: pointer;
  background: #f1f1f5;
  border: none;
  width: 134px;
  height: 34px;
  border-radius: 10px;

  font-size: 16px;
  font-family: pretendard;
  font-weight: 500;
`;
export const CategoryOption = styled.option`
  background: #f1f1f5;
  border: none;
  width: 134px;
  height: 34px;
  border-radius: 10px;

  font-size: 16px;
  font-family: pretendard;
  font-weight: 500;
`;

export const OptionContainer = styled.div`
  background-color: #f1f1f5;
  width: 356px;
  height: 26px;
  padding: 4px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 5px;
`;

export const HeaderOption = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  cursor: pointer;
`;

export const TextOption = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;
`;

export const AddOption = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;
`;

export const Title = styled.input`
  width: 744px;
  height: 48px;
  border-radius: 5px;
  background-color: #f1f1f5;
  border: none;

  font-family: pretendard;
  font-size: 18px;
  font-weight: 500;
  color: #999;
  padding: 0 20px;

  &:focus {
    outline: none;
  }
`;

export const TextDetail = styled.textarea`
  width: 744px;
  height: 300px;
  resize: none;
  outline: none;
  border: none;
  background-color: #f1f1f5;
  border-radius: 5px;
  padding: 20px 20px;

  color: #999;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  width: 784px;
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
