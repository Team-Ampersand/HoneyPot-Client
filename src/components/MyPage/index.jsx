import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../Header";
import SkeletonMyPage from "./SkeletonMyPage";
import { Thumbnail, LikeCountIcon, MyPageProfile, Profile } from "../../asset";
import CommentIcon from "../../asset/svg/CommentIcon";
import { instance } from "../../apis";
import { useNavigate } from "react-router-dom";
import stripMarkdown from "../../utils/stripMarkdown";

const MyPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <S.Background>
      <Header />
      {isLoading ? (
        <SkeletonMyPage />
      ) : (
        <>
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
