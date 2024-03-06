import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import Header from '../Header';
import Like from './Like'
import { ProfileIcon } from '../../asset';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../apis';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import axios from 'axios';

const Posting = () => {
  const [posting, setPosting] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [comment, setComment] = useState('');
  const [commentIndex, setCommentIndex] = useState(0);
  const [countComment, setCountComment] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const commentWrite = useRef(null);
  const markdownText = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleModal = (name) => {
    if (name === 'comment') {
      setIsComment(true);
    } else if (name === 'post') {
      setIsComment(false);
    }
    setIsOpen((pre) => !pre);
  };

  const moveWriteContainer = () => commentWrite.current?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = async () => {
    try {
      await instance
        .post(`/comment/${id}/write`, { content: comment })
        .then((res) => {
          alert(res.data);
        }).catch((e)=>{
          console.log(e)
        })
    } catch (error) {
      if(error.response&&error.response.status === 400){
        alert('유효한 post가 없습니다.');
      }
    }
  };

  const editComment = (text, index) => {
    moveWriteContainer();
    setComment(text);
    setIsEdit(true);
    setCommentIndex(index);
  };

  const handleEditSubmit = async () => {
    try {
      await instance
        .put(`/post/${id}`, {
          title: title,
          content: content,
        })
        .then((response) => {
          navigate('/');
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('글을 다시 작성해주세요.');
        console.error('에러 발생:', error);
      } else if (error.response && error.response.status === 403) {
        console.log('다시 로그인 해주세요');
        console.error('에러 발생:', error);
      }
    }
  };

  const deletePosting = async () => {
    try {
      await instance
        .delete(`/post/${id}`)
        .then((res) => {
          alert(res.data);
          navigate('/');
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('다시 시도해주세요');
      } else if (error.response && error.response.status === 401) {
        alert('인증에 문제가 발생했습니다.');
      } else if (error.response && error.response.status === 403) {
        alert('권한이 없습니다.');
      }
    }
  };

  const deleteComment = async () => {
    try {
      await instance
        .delete(`/post/${commentIndex}`)
        .then((res) => {
          alert(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('다시 시도해주세요');
      } else if (error.response && error.response.status === 401) {
        alert('인증에 문제가 발생했습니다.');
      } else if (error.response && error.response.status === 403) {
        alert('권한이 없습니다.');
      }
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/post`)
        setPosting(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
        setCountComment(res.data.comment.length);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert('인증에 문제가 발생했습니다.');
        } else if (error.response && error.response.status === 403) {
          alert('권한이 없습니다.');
        }
      }
    };
    getPost();
  }, [id]);
  return (
    <S.Background>
      <Header />
      {isOpen ? (
        <S.ModalBackground>
          <S.Modal>
            <S.ModalTextContainer>
              <S.ModalTitle>{isComment ? '댓글 삭제' : '글 삭제'}</S.ModalTitle>
              <S.CommentContent>정말로 삭제하겠습니까?</S.CommentContent>
            </S.ModalTextContainer>
            <S.ModalButtonContainer>
              <S.CancelButton onClick={handleModal}>취소</S.CancelButton>
              <S.CheckButton onClick={isComment?deleteComment:deletePosting}>확인</S.CheckButton>
            </S.ModalButtonContainer>
          </S.Modal>
        </S.ModalBackground>
      ) : null}
      <S.PostBackground>
        <Like likes = {posting.likes} id={id}/>
        <S.PostContainer>
          <S.ContentContainer>
            <S.ContentTitle>{posting.title}</S.ContentTitle>
            <S.CreationContainer>
              <S.DivideContainer>
                <S.CreationText>{posting.author}</S.CreationText>
              </S.DivideContainer>
              <S.DivideContainer>
                <S.FunctionText
                  onClick={() =>
                    navigate(`/edit`, {
                      state: {
                        title: title,
                        content: content,
                        id: id,
                      },
                    })
                  }
                >
                  수정
                </S.FunctionText>
                <S.FunctionText onClick={() => handleModal('post')}>
                  삭제
                </S.FunctionText>
              </S.DivideContainer>
            </S.CreationContainer>
            <S.TextContainer>
              <S.ContentText>
                <ReactMarkdown children={content} ref={markdownText} rehypePlugins={rehypeRaw}/>
              </S.ContentText>
            </S.TextContainer>
          </S.ContentContainer>
          <S.CommentContainer>
            <S.WritingCommentContainer>
              <S.CommentNumber>{countComment}개의 댓글</S.CommentNumber>
              <S.WritingComment
                placeholder='댓글을 작성하세요.'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                ref={commentWrite}
              />
              <S.RegistButton
                onClick={isEdit ?()=>handleEditSubmit():()=>handleSubmit()}
              >
                {isEdit?'댓글 수정':'댓글 작성'}
              </S.RegistButton>
            </S.WritingCommentContainer>
            {posting.comment &&
              posting.comment.map((item, index) => {
                return(<S.Comments key={index}>
                  <S.CommentHeader>
                    <S.ProfileContainer>
                      <S.ProfileImage>
                        <ProfileIcon />
                      </S.ProfileImage>
                      <S.CommentAuthorContainer>
                        <S.CommentAuthorName>{item.author}</S.CommentAuthorName>
                      </S.CommentAuthorContainer>
                    </S.ProfileContainer>
                    <S.DivideContainer>
                      <S.FunctionText
                        onClick={() => editComment(item.comment, index)}
                      >
                        수정
                      </S.FunctionText>
                      <S.FunctionText onClick={() => handleModal('comment')}>
                        삭제
                      </S.FunctionText>
                    </S.DivideContainer>
                  </S.CommentHeader>
                  <S.CommentBody>
                    <S.CommentContent>{item.comment}</S.CommentContent>
                  </S.CommentBody>
                </S.Comments>)
              })}
          </S.CommentContainer>
        </S.PostContainer>
      </S.PostBackground>
    </S.Background>
  );
};

export default Posting;
