import { Link } from "react-router-dom";
import styled from "styled-components";

export const Background = styled.div`
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 103px;
  overflow-y: auto;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const UserName = styled.p`
  font-family: pretendard;
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
  gap: 8px;
  width: 100%;
  max-width: 1240px;
`;

export const BodyTitle = styled.p`
  font-family: pretendard;
  color: #000;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const PostBackground = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  min-height: 180px;
  height: 284px;
  border-radius: 20px;
  box-shadow: 4px 8px 25px 0 rgba(112, 144, 176, 0.1);
  background-color: #fff;
  text-decoration: none;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    min-height: 220px;
    padding: 16px 0;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 40px 65px;
  gap: 16px;
  flex: 1;
  @media (max-width: 600px) {
    margin: 16px 12px;
    width: 100%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const PostAuthorName = styled.p`
  display: flex;
  text-align: center;
  font-family: pretendard;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const PostTitle = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 600;
  color: #000;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const PostContent = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 100%;
  max-width: 770px;
  color: #707070;
  @media (max-width: 600px) {
    max-width: 100%;
    font-size: 16px;
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
  @media (max-width: 600px) {
    width: 100%;
    height: 180px;
    margin-top: 12px;
  }
`;
