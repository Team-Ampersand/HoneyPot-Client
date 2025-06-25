import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const SkeletonBackground = styled.div`
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
`;

const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 8px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const Profile = styled(SkeletonBox)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Author = styled(SkeletonBox)`
  width: 80px;
  height: 18px;
`;

const Title = styled(SkeletonBox)`
  width: 60%;
  height: 32px;
`;

const Content = styled(SkeletonBox)`
  width: 90%;
  height: 80px;
`;

const Like = styled(SkeletonBox)`
  width: 40px;
  height: 16px;
`;

const Right = styled(SkeletonBox)`
  width: 270px;
  height: 204px;
  border-radius: 20px;
`;

const SkeletonPost = () => (
  <SkeletonBackground>
    <Left>
      <Profile />
      <Author />
      <Title />
      <Content />
      <Like />
    </Left>
    <Right />
  </SkeletonBackground>
);

export default SkeletonPost;
