import styled from 'styled-components';

export const Background = styled.div`
  background: #f7f8fa;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  flex-direction: column;
  gap: 30px;
`;

export const PostBackground = styled.div`
  max-width: 928px;
  border-radius: 10px;
  background-color: #fff;
  gap: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 50px;
`;

export const PostContainer = styled.div`
  padding: 72px;
  max-width: 784px;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  max-width: 784px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const ContentTitle = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  color: #000;
`;

export const CreationContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreationText = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: #999;
`;

export const FunctionText = styled(CreationText)`
  cursor: pointer;
`;

export const DivideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TextContainer = styled.div`
  max-width: 784px;
`;

export const ContentText = styled.p`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  color: #000;
`;

export const HText = styled.p`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  color: #000;
`;

export const ContentImage = styled.img`
  max-width: 50vw;
  max-height: 50vh;
  object-fit: cover;
`;

export const CommentContainer = styled.div`
  max-width: 784px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const WritingCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const CommentNumber = styled.p`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  color: #000;
`;

export const WritingComment = styled.textarea`
  max-width: 784px;
  height: 158px;
  resize: none;
  outline: none;
  border-radius: 10px;
  border-width: 1px;
  border-color: #ddd;
  padding: 20px 22px;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #707070;
`;

export const RegistButton = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 25px;
  background: #ffc300;
  border: 0;
  border-radius: 5px;

  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const CommentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

export const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
`;

export const CommentAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CommentAuthorName = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #000;
`;

export const CommentWriteDate = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #999;
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CommentContent = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 784px;
  font-family: Pretendard;
  font-size: 20px;
  text-align: left;
  color: #000;
`;

export const AddReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  gap: 4px;
`;

export const AddReplyText = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: #ffc300;
`;
