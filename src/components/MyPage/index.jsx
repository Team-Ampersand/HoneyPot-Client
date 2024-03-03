import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../Header';
import { Dolphin, LikeCountIcon, MyPageProfile, Profile } from '../../asset';
import CommentIcon from '../../asset/svg/CommentIcon';
import instance from '../../apis/refresh';
import TokenManager from '../../apis/TokenManager';

const MyPage = () => {
  const [post, setPost] = useState([]);

  const tokenManager = new TokenManager();
  const token = tokenManager.accessToken;
  
  useEffect(() => {
    try {
      instance.get('/user').then((res) => setPost(res.data.infoPosts));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <S.Background>
      <Header />
      <S.UserContainer>
        <MyPageProfile />
        <S.UserName>{post.length > 0 && post[0].author}</S.UserName>
      </S.UserContainer>
      <S.BodyContainer>
        <S.BodyTitle>내가 작성한 글</S.BodyTitle>
        {post.map((post) => (
          <S.PostBackground key={post.id}>
            <S.PostContainer>
              <S.ProfileContainer>
                <Profile />
                <S.PostAuthorName>{post.author}</S.PostAuthorName>
              </S.ProfileContainer>
              <S.PostTextContainer>
                <S.PostTitle>{post.title}</S.PostTitle>
                <S.PostContent>{post.content}</S.PostContent>
              </S.PostTextContainer>
              <S.LikeCommentContainer>
                <S.DivideContainer>
                  <CommentIcon />
                  <S.PostCountText>{post.comments}</S.PostCountText>
                </S.DivideContainer>
                <S.DivideContainer>
                  <LikeCountIcon />
                  <S.PostCountText>{post.likes}</S.PostCountText>
                </S.DivideContainer>
              </S.LikeCommentContainer>
            </S.PostContainer>
            <S.PostThumbnail src={Dolphin} />
          </S.PostBackground>
        ))}
      </S.BodyContainer>
    </S.Background>
  );
};

export default MyPage;