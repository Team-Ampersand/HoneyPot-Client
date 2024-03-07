import React, { useEffect, useState } from 'react';
import Header from '../Header';
import * as S from './style';
import {
  AddPost,
  CommentIcon,
  LikeCountIcon,
  NoticeImg,
  ProfileIcon,
  Thumbnail,
} from '../../asset';
import { instance } from '../../apis';
import { useNavigate } from 'react-router';

const Main = () => {
  const [list, setList] = useState([]);
  const [hottopic, setHottopic] = useState([]);
  const [isTrend, setIsTrend] = useState(true);
  const [category, setCategory] = useState('뷰티/패션');
  const [selectedBook, setSelectedBook] = useState('시');
  const [selectedOTT, setSelectedOTT] = useState('Wavve');
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSelection = (name, value) => {
    if (name === 'trend') {
      setIsTrend((pre) => !pre);
    } else if (name === 'category') {
      setCategory(value);
    } else if (name === 'book') {
      setSelectedBook(value);
    } else if (name === 'ott') {
      setSelectedOTT(value);
    }
  };

  const writingKeyword = (e) => setKeyword(e.target.value);

  const searchKeyword = async () => {
    try {
      const params = { "keyword": keyword };
      const res = await instance.get(`/post/search`, { params });
      setList(res.data);
      setHottopic(res.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('인증에 문제가 발생했습니다.');
      } else if (error.response && error.response.status === 403) {
        alert('권한이 없습니다.');
      }
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const params = { "category": category };
        const res = await instance.get(`/post/list`, { params });
        setList(res.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert('카테고리가 잘못되었습니다');
        } else if (error.response && error.response.status === 401) {
          alert('인증에 문제가 발생했습니다.');
        } else if (error.response && error.response.status === 403) {
          alert('권한이 없습니다.');
        }
      }
    };
    getPost();
  }, [category]);

  useEffect(() => {
    const getHottopic = async () => {
      try {
        const res = await instance.get(`/post/hottopic`);
        setHottopic(res.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert('인증에 문제가 발생했습니다.');
        } else if (error.response && error.response.status === 403) {
          alert('권한이 없습니다.');
        }
      }
    };
    getHottopic();
  }, [isTrend]);

  return (
    <>
      <Header typing={writingKeyword} search={searchKeyword} />
      <S.Background>
        <S.MainContainer>
          <S.NoticeBackground>
            <S.BannerContainer>
              <S.NoticeTextContainer>
                <S.NoticeText>꿀팁을 담은</S.NoticeText>
                <S.NoticeText>나만의 꿀단지를 만들어 봐요!</S.NoticeText>
              </S.NoticeTextContainer>
              <S.NoticeImg src={NoticeImg} />
            </S.BannerContainer>
          </S.NoticeBackground>
          <S.SelectionPart>
            {isTrend ? (
              <>
                <S.SelectionContainer>
                  <S.SelectedText>트렌딩</S.SelectedText>
                  <S.SelectedBar />
                </S.SelectionContainer>
                <S.NotSelectedText onClick={() => handleSelection('trend')}>
                  토픽
                </S.NotSelectedText>
              </>
            ) : (
              <>
                <S.NotSelectedText onClick={() => handleSelection('trend')}>
                  트렌딩
                </S.NotSelectedText>
                <S.SelectionContainer>
                  <S.SelectedText>토픽</S.SelectedText>
                  <S.SelectedBar />
                </S.SelectionContainer>
              </>
            )}
          </S.SelectionPart>
          <S.PostPart>
            {isTrend ? (
              <>
                <S.PostPartText>이주의 트랜드</S.PostPartText>
                {hottopic.data &&
                  hottopic.data.map((item) => (
                    <S.PostBackground
                      key={item.id}
                      onClick={() => navigate(`/posting/${item.id}`)}
                    >
                      <S.PostContainer>
                        <S.ProfileContainer>
                          <S.ProfileImage>
                            <ProfileIcon />
                          </S.ProfileImage>
                          <S.PostAuthorName>{item.author}</S.PostAuthorName>
                        </S.ProfileContainer>
                        <S.PostTextContainer>
                          <S.PostTitle>{item.title}</S.PostTitle>
                          <S.PostContent>{item.content}</S.PostContent>
                        </S.PostTextContainer>
                        <S.LikeCommentContainer>
                          <S.DivideContainer>
                            <CommentIcon />
                            <S.PostCountText>{item.comment}</S.PostCountText>
                          </S.DivideContainer>
                          <S.DivideContainer>
                            <LikeCountIcon />
                            <S.PostCountText>{item.likeList}</S.PostCountText>
                          </S.DivideContainer>
                        </S.LikeCommentContainer>
                      </S.PostContainer>
                      <S.PostThumbnail src={item.preview || Thumbnail} />
                    </S.PostBackground>
                  ))}
              </>
            ) : (
              <>
                <S.CategoryPart>
                  <S.CategoryContainer
                    radius={
                      category === 'BOOK' || category === 'OTT'
                        ? '10px 10px 0 0'
                        : '10px'
                    }
                  >
                    <S.CategoryInnerContainer>
                      {[
                        'BEAUTY',
                        'BOOK',
                        'OTT',
                        'LIFE',
                        'HEALTH',
                        'TRAVEL',
                      ].map((item, index) => (
                        <S.CategoryText
                          key={index}
                          onClick={() => handleSelection('category', item)}
                          color={category === item ? '#ffc300' : '#999'}
                        >
                          {item}
                        </S.CategoryText>
                      ))}
                    </S.CategoryInnerContainer>
                  </S.CategoryContainer>

                  {category === 'BOOK' || category === 'OTT' ? (
                    <S.BookOTTContainer>
                      <S.CategoryInnerContainer>
                        {category === 'BOOK' &&
                          [
                            'POETRY',
                            'LITERATURE',
                            'NONFICTION',
                            'MAJOR',
                            'OTHER ',
                          ].map((item, index) => (
                            <S.CategoryText
                              key={index}
                              onClick={() => handleSelection('book', item)}
                              color={selectedBook === item ? '#ffc300' : '#999'}
                            >
                              {item}
                            </S.CategoryText>
                          ))}
                        {category === 'OTT' &&
                          ['WAVVE', 'TVING', 'WATCHA', 'DISNEP', 'NETFLIX'].map(
                            (item, index) => (
                              <S.CategoryText
                                key={index}
                                onClick={() => handleSelection('ott', item)}
                                color={
                                  selectedOTT === item ? '#ffc300' : '#999'
                                }
                              >
                                {item}
                              </S.CategoryText>
                            )
                          )}
                      </S.CategoryInnerContainer>
                    </S.BookOTTContainer>
                  ) : null}
                </S.CategoryPart>
                {list.data &&
                  list.data.map((item) => (
                    <S.PostBackground
                      key={item.id}
                      onClick={() => navigate(`/posting/${item.id}`)}
                    >
                      <S.PostContainer>
                        <S.ProfileContainer>
                          <S.ProfileImage>
                            <ProfileIcon />
                          </S.ProfileImage>
                          <S.PostAuthorName>{item.author}</S.PostAuthorName>
                        </S.ProfileContainer>
                        <S.PostTextContainer>
                          <S.PostTitle>{item.title}</S.PostTitle>
                          <S.PostContent>{item.content}</S.PostContent>
                        </S.PostTextContainer>
                        <S.LikeCommentContainer>
                          <S.DivideContainer>
                            <CommentIcon />
                            <S.PostCountText>{item.comment}</S.PostCountText>
                          </S.DivideContainer>
                          <S.DivideContainer>
                            <LikeCountIcon />
                            <S.PostCountText>{item.likeList}</S.PostCountText>
                          </S.DivideContainer>
                        </S.LikeCommentContainer>
                      </S.PostContainer>
                      <S.PostThumbnail src={item.preview || Thumbnail} />
                    </S.PostBackground>
                  ))}
              </>
            )}
          </S.PostPart>
        </S.MainContainer>
        <S.WriteButton onClick={() => navigate('/writing')}>
          <AddPost />
        </S.WriteButton>
      </S.Background>
    </>
  );
};

export default Main;
