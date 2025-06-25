import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const SkeletonBackground = styled.div`
  background: #f7f8fa;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
  overflow-y: auto;
`;

const SkeletonPostBackground = styled.div`
  max-width: 928px;
  min-width: 784px;
  border-radius: 10px;
  background-color: #fff;
  gap: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const SkeletonPostContainer = styled.div`
  padding: 72px;
  max-width: 784px;
  min-width: 784px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 8px;
`;

const SkeletonTitle = styled(SkeletonBox)`
  width: 80%;
  height: 48px;
`;

const SkeletonCreationContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SkeletonAuthor = styled(SkeletonBox)`
  width: 120px;
  height: 18px;
`;

const SkeletonFunctions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SkeletonFunction = styled(SkeletonBox)`
  width: 40px;
  height: 18px;
`;

const SkeletonLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #fff;
  padding: 14px 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SkeletonLikeIcon = styled(SkeletonBox)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SkeletonLikeCount = styled(SkeletonBox)`
  width: 30px;
  height: 16px;
`;

const SkeletonContent = styled.div`
  max-width: 784px;
  min-width: 784px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonContentLine = styled(SkeletonBox)`
  width: 100%;
  height: 20px;

  &:nth-child(2) {
    width: 90%;
  }

  &:nth-child(3) {
    width: 95%;
  }

  &:nth-child(4) {
    width: 85%;
  }

  &:nth-child(5) {
    width: 70%;
  }
`;

const SkeletonCommentContainer = styled.div`
  max-width: 784px;
  min-width: 784px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SkeletonCommentNumber = styled(SkeletonBox)`
  width: 100px;
  height: 16px;
`;

const SkeletonCommentInput = styled(SkeletonBox)`
  width: 100%;
  height: 158px;
  border-radius: 10px;
`;

const SkeletonCommentButton = styled(SkeletonBox)`
  width: 84px;
  height: 25px;
  align-self: flex-end;
`;

const SkeletonComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SkeletonCommentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SkeletonCommentProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

const SkeletonCommentProfileImage = styled(SkeletonBox)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SkeletonCommentAuthor = styled(SkeletonBox)`
  width: 80px;
  height: 18px;
`;

const SkeletonCommentFunctions = styled.div`
  display: flex;
  gap: 20px;
`;

const SkeletonCommentFunction = styled(SkeletonBox)`
  width: 30px;
  height: 18px;
`;

const SkeletonCommentContent = styled(SkeletonBox)`
  width: 100%;
  height: 20px;
`;

const SkeletonPosting = () => (
  <SkeletonBackground>
    <SkeletonPostBackground>
      <SkeletonPostContainer>
        <SkeletonTitle />
        <SkeletonCreationContainer>
          <SkeletonAuthor />
          <SkeletonFunctions>
            <SkeletonFunction />
            <SkeletonFunction />
          </SkeletonFunctions>
        </SkeletonCreationContainer>
        <SkeletonContent>
          <SkeletonContentLine />
          <SkeletonContentLine />
          <SkeletonContentLine />
          <SkeletonContentLine />
          <SkeletonContentLine />
        </SkeletonContent>
        <SkeletonCommentContainer>
          <SkeletonCommentNumber />
          <SkeletonCommentInput />
          <SkeletonCommentButton />
          <SkeletonComment>
            <SkeletonCommentHeader>
              <SkeletonCommentProfile>
                <SkeletonCommentProfileImage />
                <SkeletonCommentAuthor />
              </SkeletonCommentProfile>
              <SkeletonCommentFunctions>
                <SkeletonCommentFunction />
                <SkeletonCommentFunction />
              </SkeletonCommentFunctions>
            </SkeletonCommentHeader>
            <SkeletonCommentContent />
          </SkeletonComment>
          <SkeletonComment>
            <SkeletonCommentHeader>
              <SkeletonCommentProfile>
                <SkeletonCommentProfileImage />
                <SkeletonCommentAuthor />
              </SkeletonCommentProfile>
              <SkeletonCommentFunctions>
                <SkeletonCommentFunction />
                <SkeletonCommentFunction />
              </SkeletonCommentFunctions>
            </SkeletonCommentHeader>
            <SkeletonCommentContent />
          </SkeletonComment>
        </SkeletonCommentContainer>
      </SkeletonPostContainer>
    </SkeletonPostBackground>
  </SkeletonBackground>
);

export default SkeletonPosting;
