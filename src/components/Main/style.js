import styled from "styled-components";

export const Background = styled.div`
  background: #f7f8fa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: auto;
  flex-direction: column;
  padding: 16px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  padding: 0 16px;
  gap: 24px;
`;

export const NoticeBackground = styled.div`
  display: flex;
  width: 100%;
  height: 320px;
  border-radius: 16px;
  background: rgba(255, 203, 32, 0.5);
  margin-top: 24px;
  @media (max-width: 600px) {
    height: auto;
    padding: 32px 0;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 48px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;
    justify-content: center;
  }
`;

export const NoticeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NoticeText = styled.span`
  font-family: Pretendard;
  font-size: 36px;
  font-weight: 600;
  text-align: left;
  color: #191919;
  @media (max-width: 600px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const NoticeImg = styled.div`
  width: 243px;
  height: 260px;
  background: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 600px) {
    width: 180px;
    height: 195px;
  }
`;

export const SelectionPart = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  gap: 56px;
`;

export const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;

export const SelectedText = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #000;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const SelectedBar = styled.div`
  width: 100%;
  height: 4px;
  background: #000;
`;

export const NotSelectedText = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #999;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const PostPart = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const PostPartText = styled.div`
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 600;
  text-align: left;
  color: #000;
  align-self: flex-start;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const CategoryPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CategoryContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 54px;
  height: auto;
  padding: 8px 0;
  background-color: #fff;
  border-radius: ${({ radius }) => radius};
  filter: drop-shadow(4px 8px 25px rgba(112, 144, 176, 0.1));
`;

export const CategoryInnerContainer = styled.span`
  width: 100%;
  max-width: 680px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0 16px;
`;

export const CategoryText = styled.span`
  font-size: 20px;
  text-align: left;
  color: ${(color) => color};
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const BookOTTContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  width: 100%;
  min-height: 54px;
  height: auto;
  padding: 8px 0;
  filter: drop-shadow(4px 8px 25px rgba(112, 144, 176, 0.1));
`;

export const WriteButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 40px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1300px) {
    right: 3%;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 24px;
    right: 24px;
  }
`;

export const PostBackground = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 284px;
  border-radius: 20px;
  box-shadow: 4px 8px 25px 0 rgba(112, 144, 176, 0.1);
  background-color: #fff;
  box-sizing: border-box;
  cursor: pointer;
  @media (max-width: 600px) {
    height: auto;
    gap: 20px;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
`;

export const PostAuthorName = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  font-style: normal;
  color: #000;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PostTitle = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  text-align: left;
  color: #000;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const PostContent = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  max-width: 400px;
  color: #707070;
  @media (max-width: 600px) {
    font-size: 16px;
    max-width: 200px;
  }
`;

export const LikeCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const DivideContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const PostCountText = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #999;
`;

export const PostThumbnail = styled.div`
  width: 270px;
  height: 204px;
  background: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;
