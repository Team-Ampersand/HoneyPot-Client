import styled from 'styled-components';

export const Background = styled.div`
  background: #f7f8fa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 24px;
`;

export const NoticeBackground = styled.div`
  display: flex;
  width: 1240px;
  height: 320px;
  border-radius: 16px;
  background: rgba(255, 203, 32, 0.5);
  margin-top: 24px;
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const NoticeTextContainer = styled.div`
  position: relative;
  left: 75px;
  top: 60px;
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
`;

export const NoticeImg = styled.div`
  align-self: center;
  position: relative;
  right: 164px;
  width: 243px;
  height: 260px;
  background: url(${({ src }) => src});
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
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #000;
`;

export const SelectedBar = styled.div`
  width: 100px;
  height: 4px;
  background: #000;
`;

export const NotSelectedText = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #999;
  cursor: pointer;
`;

export const PostPart = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 50px;
`;

export const PostPartText = styled.div`
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 600;
  text-align: left;
  color: #000;

  align-self: flex-start;
`;

export const CategoryPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1240px;
  height: 54px;
  background-color: #fff;
  border-radius: ${({ radius }) => radius};
  filter: drop-shadow(4px 8px 25px rgba(112, 144, 176, 0.1));
`;

export const CategoryInnerContainer = styled.span`
  width: 680px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CategoryText = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 20px;
  text-align: left;
  color: ${(color) => color};
  cursor: pointer;
`;

export const BookOTTContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  width: 1240px;
  height: 54px;
  filter: drop-shadow(4px 8px 25px rgba(112, 144, 176, 0.1));
`;

export const WriteButton = styled.div`
  position: fixed;
  bottom: 32px;
  right: 40px;

  cursor: pointer;
`;


export const PostBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 1240px;
  height: 284px;
  border-radius: 20px;
  box-shadow: 4px 8px 25px 0 rgba(112, 144, 176, 0.1);
  background-color: #fff;
  cursor: pointer;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 40px 65px;
  gap: 16px;
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
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  font-style: normal;
  color: #000;
`;

export const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PostTitle = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  text-align: left;
  color: #000;
`;

export const PostContent = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 20px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 770px;
  color: #707070;
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
  flex-grow: 0;
  flex-shrink: 0;
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
`;
