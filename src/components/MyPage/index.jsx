import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../Header';
import { Thumbnail, LikeCountIcon, MyPageProfile, Profile } from '../../asset';
import CommentIcon from '../../asset/svg/CommentIcon';
import {instance} from '../../apis';

const MyPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/user');
        setPosts(response.data.infoPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <S.Background>
      <Header />
      <S.UserContainer>
        <MyPageProfile />
        <S.UserName>{posts.length > 0 && posts[0].author}</S.UserName>
      </S.UserContainer>
      <S.BodyContainer>
        <S.BodyTitle>내가 작성한 글</S.BodyTitle>
        {posts.map((posts) => (
          <S.PostBackground key={posts.id}>
            <S.PostContainer>
              <S.ProfileContainer>
                <Profile />
                <S.PostAuthorName>{posts.author}</S.PostAuthorName>
              </S.ProfileContainer>
              <S.PostTextContainer>
                <S.PostTitle>{posts.title}</S.PostTitle>
                <S.PostContent>{posts.content}</S.PostContent>
              </S.PostTextContainer>
              <S.LikeCommentContainer>
                <S.DivideContainer>
                  <CommentIcon />
                  <S.PostCountText>{posts.comments}</S.PostCountText>
                </S.DivideContainer>
                <S.DivideContainer>
                  <LikeCountIcon />
                  <S.PostCountText>{posts.likes}</S.PostCountText>
                </S.DivideContainer>
              </S.LikeCommentContainer>
            </S.PostContainer>
            {/* <S.PostThumbnail src={Dolphin} /> */}
            <S.PostThumbnail src={posts.previewImage || Thumbnail} />
          </S.PostBackground>
        ))}
      </S.BodyContainer>
    </S.Background>
  );
};

export default MyPage;
