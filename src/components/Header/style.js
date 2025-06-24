import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
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
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Search = styled.input`
  padding: 10px 40px 10px 16px;
  max-width: 266px;
  height: 24px;
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

  @media (max-width: 768px) {
    width: 180px;
  }

  @media (max-width: 480px) {
    width: 120px;
    font-size: 16px;
  }
`;

export const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const HeaderSeeMoreContainer = styled.div`
  position: relative;
`;

export const HeaderSeeMore = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 10;
  display: flex;
`;

export const ModalContent = styled.div`
  width: 208px;
  height: 112px;
  border-radius: 16px;
  padding: 16px;
  background-color: white;
  box-shadow: 4px 8px 25px 0 rgba(112, 144, 176, 0.2);
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
