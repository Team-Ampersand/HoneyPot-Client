import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-around;
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
`;

export const SearchProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  position: relative;
`;

export const Search = styled.input`
  display: inline-flex;
  padding: 10px 50px 10px 16px;
  width: 266px;
  height: 24px;
  gap: 8px;
  border-radius: 30px;
  background: #ebebeb;
  border: none;

  color: #999;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 96px;
`;

export const profile = styled.div`
  width: 50px;
  height: 50px;
`;
