import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../Header";
import SkeletonMyPage from "./SkeletonMyPage";
import { Thumbnail, LikeCountIcon, MyPageProfile, Profile } from "../../asset";
import CommentIcon from "../../asset/svg/CommentIcon";
import { instance } from "../../apis";
import { useNavigate } from "react-router-dom";
import stripMarkdown from "../../utils/stripMarkdown";
import { toast } from "react-toastify";

const MyPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [deletePostId, setDeletePostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await instance.get("/user");
        setPosts(response.data.infoPosts);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleModal = (postId) => {
    setDeletePostId(postId);
    setIsOpen((prev) => !prev);
  };

  const deletePosting = async () => {
    try {
      await instance
        .delete(`/post/${deletePostId}`)
        .then((res) => {
          toast.success("게시글 삭제 성공");
          setPosts((prev) =>
            prev.filter((post) => post.postId !== deletePostId)
          );
          setIsOpen(false);
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

  const handleEdit = (post) => {
    navigate(`/edit`, {
      state: {
        title: post.title,
        content: post.content,
        id: post.postId,
      },
    });
  };

  return (
    <S.Background>
      <Header />
      {isLoading ? (
        <SkeletonMyPage />
      ) : (
        <>
          {isOpen ? (
            <S.ModalBackground>
              <S.Modal>
                <S.ModalTextContainer>
                  <S.ModalTitle>글 삭제</S.ModalTitle>
                  <S.ModalContent>정말로 삭제하겠습니까?</S.ModalContent>
                </S.ModalTextContainer>
                <S.ModalButtonContainer>
                  <S.CancelButton onClick={() => setIsOpen(false)}>
                    취소
                  </S.CancelButton>
                  <S.CheckButton onClick={deletePosting}>확인</S.CheckButton>
                </S.ModalButtonContainer>
              </S.Modal>
            </S.ModalBackground>
          ) : null}
          <S.UserContainer>
            <MyPageProfile />
            <S.UserName>{posts.length > 0 && posts[0].author}</S.UserName>
          </S.UserContainer>
          <S.BodyContainer>
            <S.BodyTitle>내가 작성한 글</S.BodyTitle>
            {posts.map((item) => (
              <S.PostBackground
                key={item.postId}
                onClick={() => navigate(`/posting/${item.postId}`)}
              >
                <S.PostContainer>
                  <S.ProfileContainer>
                    <S.ProfileImage>
                      <Profile />
                    </S.ProfileImage>
                    <S.PostAuthorName>{item.author}</S.PostAuthorName>
                  </S.ProfileContainer>
                  <S.PostTextContainer>
                    <S.PostTitle>
                      {stripMarkdown(item.title).length > 40
                        ? stripMarkdown(item.title).slice(0, 40) + "..."
                        : stripMarkdown(item.title)}
                    </S.PostTitle>
                    <S.PostContent>
                      {stripMarkdown(item.content).length > 100
                        ? stripMarkdown(item.content).slice(0, 100) + "..."
                        : stripMarkdown(item.content)}
                    </S.PostContent>
                  </S.PostTextContainer>
                  <S.LikeCommentContainer>
                    <S.DivideContainer>
                      <LikeCountIcon />
                      <S.PostCountText>{item.likes}</S.PostCountText>
                    </S.DivideContainer>
                  </S.LikeCommentContainer>
                  <S.ActionButtonsContainer
                    onClick={(e) => e.stopPropagation()}
                  >
                    <S.ActionButton
                      className="edit"
                      onClick={() => handleEdit(item)}
                    >
                      수정
                    </S.ActionButton>
                    <S.ActionButton
                      className="delete"
                      onClick={() => handleModal(item.postId)}
                    >
                      삭제
                    </S.ActionButton>
                  </S.ActionButtonsContainer>
                </S.PostContainer>
                <S.PostThumbnail src={item.previewImage || Thumbnail} />
              </S.PostBackground>
            ))}
          </S.BodyContainer>
        </>
      )}
    </S.Background>
  );
};

export default MyPage;
