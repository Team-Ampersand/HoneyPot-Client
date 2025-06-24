import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderLogo,
  Logout,
  MyPageUser,
  ProfileIcon,
  SearchIcon,
} from "../../asset";
import * as S from "./style";
import HeaderSeeMore from "../../asset/svg/HeaderSeeMore";
import { instance } from "../../apis";
import { toast } from "react-toastify";

const Header = ({ typing, search }) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = async () => {
    try {
      await instance.delete("/auth");
      toast.success("로그아웃 성공!");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("토큰이 유효하지 않습니다.");
      } else if (error.response && error.response.status === 404) {
        toast.error("토큰을 찾지 못했습니다.");
      }
    }
  };

  return (
    <S.HeaderContainer>
      <S.Logo onClick={() => navigate("/")}>
        <HeaderLogo />
      </S.Logo>
      <S.SearchProfileContainer>
        <S.SearchWrapper>
          <S.Search
            type="text"
            onChange={typing ? (e) => typing(e) : undefined}
            disabled={!typing}
          />
          <S.SearchIcon
            onClick={search ? search : undefined}
            style={{
              pointerEvents: search ? "auto" : "none",
              opacity: search ? 1 : 0.5,
            }}
          >
            <SearchIcon />
          </S.SearchIcon>
        </S.SearchWrapper>
        <S.Profile>
          <ProfileIcon />
        </S.Profile>

        <S.HeaderSeeMoreContainer>
          <S.HeaderSeeMore onClick={toggleModal}>
            <HeaderSeeMore />
          </S.HeaderSeeMore>

          {showModal && (
            <S.ModalWrapper>
              <S.ModalContent>
                <S.ContentContainer onClick={() => navigate("/mypage")}>
                  <MyPageUser />
                  <S.ModalText>마이페이지</S.ModalText>
                </S.ContentContainer>
                <S.ModalMiddleLine />
                <S.ContentContainer onClick={handleLogout}>
                  <Logout />
                  <S.ModalText>로그아웃</S.ModalText>
                </S.ContentContainer>
              </S.ModalContent>
            </S.ModalWrapper>
          )}
        </S.HeaderSeeMoreContainer>
      </S.SearchProfileContainer>
    </S.HeaderContainer>
  );
};

export default Header;
