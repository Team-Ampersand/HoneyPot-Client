import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  background: #fff;
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
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
  right: 130px;
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 50px;
  height: 50px;
`;

export const HeaderSeeMoreContainer = styled.div``;

export const HeaderSeeMore = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 88px;
  display: flex;
`;

export const ModalContent = styled.div`
  width: 208px;
  height: 112px;
  border-radius: 16px;
  padding: 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const ContentContainer = styled.div`
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalText = styled.p`
  color: #191919;
  font-size: 17px;
  font-weight: 700;
  font-family: pretendard;
`;

export const ModalMiddleLine = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid #f7f7f8;
  margin: 0 12px;
`;
