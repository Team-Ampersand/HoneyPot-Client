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

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 24px;
`;

export const UserName = styled.p`
  font-family: Pretendard;
  color: #000;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  padding: 0 16px;
  gap: 24px;
`;

export const BodyTitle = styled.p`
  font-family: Pretendard;
  color: #000;
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  align-self: flex-start;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const PostBackground = styled.div`
  display: flex;
  padding: 16px;
  gap: 60px;
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
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const PostContent = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
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
`;
