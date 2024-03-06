import styled from 'styled-components';

export const Background = styled.div`
  background: #f7f8fa;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
  overflow-y: auto;
`;

export const PostBackground = styled.div`
  max-width: 928px;
  border-radius: 10px;
  background-color: #fff;
  gap: 42px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 50px;
`;

export const PostContainer = styled.div`
  padding: 72px;
  max-width: 784px;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 784px;
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
  white-space: normal;
  word-wrap: break-word;
  flex-grow: 0;
  flex-shrink: 0;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  color: #000;

  img{
    max-width: 50vw;
    max-height: 50vh;
    object-fit: cover;
  }
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

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
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

  cursor: pointer;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.25);
  z-index: 100;
`

export const Modal = styled.div`
  width: 442px; 
  height: 224px; 
  transform: translate(-25%, -25%);
  border-radius: 10px; 
  background: #fff;
  display: flex;
  flex-direction: column;
`

export const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  top: 32px;
  left: 36px;
`

export const ModalTitle = styled.span`
  flex-grow: 0; 
  flex-shrink: 0; 
  font-family: Pretendard;
  font-size: 24px; 
  font-weight: 700; 
  text-align: left; 
  color: #191919;
`

export const ModalContent = styled.span`
  flex-grow: 0; 
  flex-shrink: 0; 
  font-family: Pretendard;
  font-size: 18px; 
  font-weight: 500; 
  text-align: left; 
  color: #191919;
`

export const ModalButtonContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: relative;
  top: 96px;
  right: 30px;
`

export const CheckButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 26px;
  background: #ffc300;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 0; 
  flex-shrink: 0;  
  font-size: 14px; 
  font-weight: 500; 
  text-align: center; 
  color: #fff;

  cursor: pointer;
`

export const CancelButton = styled(CheckButton)`
  background: #999;
`