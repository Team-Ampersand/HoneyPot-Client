import { useNavigate } from "react-router-dom";
import { HeaderLogo, ProfileIcon, SearchIcon } from "../../asset";
import * as S from "./style";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.Logo onClick={() => navigate("/")}>
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
      </S.SearchProfileContainer>
    </S.HeaderContainer>
  );
};

export default Header;
