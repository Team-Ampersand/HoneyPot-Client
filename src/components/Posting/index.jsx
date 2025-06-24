import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Header from "../Header";
import Like from "./Like";
import { ProfileIcon } from "../../asset";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../apis";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { toast } from "react-toastify";

const Posting = () => {
  const [posting, setPosting] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");
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
    if (name === "comment") {
      setIsComment(true);
    } else if (name === "post") {
      setIsComment(false);
    }
    setIsOpen((pre) => !pre);
  };

  const moveWriteContainer = () =>
    commentWrite.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async () => {
    try {
      await instance
        .post(`/comment/${id}/write`, { content: comment })
        .then((res) => {
          toast.success(res.data);
          setPosting((prev) => {
            const newComment = {
              id: Date.now(),
              author: prev.author || "익명",
              comment: comment,
            };
            return {
              ...prev,
              comments: {
                ...prev.comments,
                comments:
                  prev.comments && prev.comments.comments
                    ? [...prev.comments.comments, newComment]
                    : [newComment],
              },
            };
          });
          setComment("");
          getPost();
        })
        .catch((e) => {});
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warning("유효한 post가 없습니다.");
      }
    }
  };

  const editComment = (text, id) => {
    moveWriteContainer();
    setComment(text);
    setIsEdit(true);
    setCommentIndex(id);
  };

  const handleEditSubmit = async () => {
    try {
      await instance
        .put(`/comment/${commentIndex}`, { comment })
        .then((response) => {
          toast.success("댓글 수정 완료");
          setPosting((prev) => {
            if (!prev.comments || !prev.comments.comments) return prev;
            return {
              ...prev,
              comments: {
                ...prev.comments,
                comments: prev.comments.comments.map((c) =>
                  c.id === commentIndex ? { ...c, comment } : c
                ),
              },
            };
          });
          setIsEdit(false);
          setComment("");
          getPost();
        })
        .catch((e) => {});
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warning("글을 다시 작성해주세요.");
      } else if (error.response && error.response.status === 403) {
        toast.error("다시 로그인 해주세요");
      }
    }
  };

  const deletePosting = async () => {
    try {
      await instance
        .delete(`/post/${id}`)
        .then((res) => {
          toast.success(res.data);
          navigate("/");
        })
        .catch((e) => {});
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warning("다시 시도해주세요");
      } else if (error.response && error.response.status === 401) {
        toast.error("인증에 문제가 발생했습니다.");
      } else if (error.response && error.response.status === 403) {
        toast.error("권한이 없습니다.");
      }
    }
  };

  const deleteComment = async () => {
    try {
      await instance
        .delete(`/comment/${commentIndex}`)
        .then((res) => {
          toast.success("댓글 삭제");
          setIsOpen(false);
          setPosting((prev) => {
            if (!prev.comments || !prev.comments.comments) return prev;
            return {
              ...prev,
              comments: {
                ...prev.comments,
                comments: prev.comments.comments.filter(
                  (c) => c.id !== commentIndex
                ),
              },
            };
          });
        })
        .catch((e) => {});
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warning("다시 시도해주세요");
      } else if (error.response && error.response.status === 401) {
        toast.error("인증에 문제가 발생했습니다.");
      } else if (error.response && error.response.status === 403) {
        toast.error("권한이 없습니다.");
      }
    }
  };

  const getPost = async () => {
    try {
      const res = await instance.get(`/post/${id}`);
      setPosting(res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
      setCountComment(
        res.data.comment?.length || res.data.comments?.comments?.length || 0
      );
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("인증에 문제가 발생했습니다.");
      } else if (error.response && error.response.status === 403) {
        toast.error("권한이 없습니다.");
      }
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <S.Background>
      <Header />
      {isOpen ? (
        <S.ModalBackground>
          <S.Modal>
            <S.ModalTextContainer>
              <S.ModalTitle>{isComment ? "댓글 삭제" : "글 삭제"}</S.ModalTitle>
              <S.CommentContent>정말로 삭제하겠습니까?</S.CommentContent>
            </S.ModalTextContainer>
            <S.ModalButtonContainer>
              <S.CancelButton onClick={handleModal}>취소</S.CancelButton>
              <S.CheckButton
                onClick={isComment ? deleteComment : deletePosting}
              >
                확인
              </S.CheckButton>
            </S.ModalButtonContainer>
          </S.Modal>
        </S.ModalBackground>
      ) : null}
      <S.PostBackground>
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
                <S.FunctionText onClick={() => handleModal("post")}>
                  삭제
                </S.FunctionText>
              </S.DivideContainer>
            </S.CreationContainer>
            <Like
              likes={posting.likes}
              id={id}
              likeStatus={posting.likeStatus}
            />
            <S.TextContainer>
              <S.ContentText>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} ref={markdownText}>
                  {content}
                </ReactMarkdown>
              </S.ContentText>
            </S.TextContainer>
          </S.ContentContainer>
          <S.CommentContainer>
            <S.WritingCommentContainer>
              <S.CommentNumber>{countComment}개의 댓글</S.CommentNumber>
              <S.WritingComment
                placeholder="댓글을 작성하세요."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                ref={commentWrite}
              />
              <S.RegistButton
                onClick={
                  isEdit ? () => handleEditSubmit() : () => handleSubmit()
                }
              >
                {isEdit ? "댓글 수정" : "댓글 작성"}
              </S.RegistButton>
            </S.WritingCommentContainer>
            {posting.comments &&
              posting.comments.comments &&
              posting.comments.comments.map((item, index) => {
                return (
                  <S.Comments key={item.id}>
                    <S.CommentHeader>
                      <S.ProfileContainer>
                        <S.ProfileImage>
                          <ProfileIcon />
                        </S.ProfileImage>
                        <S.CommentAuthorContainer>
                          <S.CommentAuthorName>
                            {item.author}
                          </S.CommentAuthorName>
                        </S.CommentAuthorContainer>
                      </S.ProfileContainer>
                      <S.DivideContainer>
                        <S.FunctionText
                          onClick={() => editComment(item.comment, item.id)}
                        >
                          수정
                        </S.FunctionText>
                        <S.FunctionText
                          onClick={() => {
                            setCommentIndex(item.id);
                            handleModal("comment");
                          }}
                        >
                          삭제
                        </S.FunctionText>
                      </S.DivideContainer>
                    </S.CommentHeader>
                    <S.CommentBody>
                      <S.CommentContent
                        dangerouslySetInnerHTML={{
                          __html: item.comment.replace(/\n/g, "<br />"),
                        }}
                      />
                    </S.CommentBody>
                  </S.Comments>
                );
              })}
          </S.CommentContainer>
        </S.PostContainer>
      </S.PostBackground>
    </S.Background>
  );
};

export default Posting;
