import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderLogo, Logout, MyPageUser, ProfileIcon, SearchIcon } from '../../asset';
import * as S from './style';
import HeaderSeeMore from '../../asset/svg/HeaderSeeMore';
import { instance } from '../../apis';
import { TokenManager } from '../../apis';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const tokenManager = new TokenManager();
  const accessToken = tokenManager.accessToken;
  const refreshToken = tokenManager.refreshToken;

  const handleLogout = async () => {
    try {
      await instance.delete('/auth', {
        headers: {
          refreshToken: `Bearer ${refreshToken}`,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      tokenManager.removeTokens();
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('토큰이 유효하지 않습니다.');
      } else if (error.response && error.response.status === 404) {
        alert('토큰을 찾지 못했습니다.');
      }
    }
  };

  return (
    <S.HeaderContainer>
      <S.Logo onClick={() => navigate('/')}>
        <HeaderLogo />
      </S.Logo>
      <S.SearchProfileContainer>
        <S.Search type="text"></S.Search>
        <S.SearchIcon>
          <SearchIcon />
        </S.SearchIcon>
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
                <S.ContentContainer onClick={() => navigate('/mypage')}>
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
