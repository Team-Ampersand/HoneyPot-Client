import React, { useState } from 'react';
import Header from '../Header';
import * as S from './style';
import {
  CommentIcon,
  CurrentWindowIcon,
  NextWindowIcon,
  NoticeImg,
  ProfileIcon,
  LikeCountIcon,
  Dolphin,
  WriteButton,
} from '../../asset';

const Main = () => {
  const [isTrend, setIsTrend] = useState(true);
  const [category, setCategory] = useState('뷰티/패션');
  const [selectedBook, setSelectedBook] = useState('시');
  const [selectedOTT, setSelectedOTT] = useState('Wavve');

  const handleSelection = () => {
    setIsTrend((pre) => !pre);
  };

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  const handleBookClick = (field) => {
    setSelectedBook(field);
  };

  const handleOTTClick = (field) => {
    setSelectedOTT(field);
  };

  return (
    <>
      <Header />
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
            <S.NoticeProgress>
              <CurrentWindowIcon />
              <NextWindowIcon />
              <NextWindowIcon />
            </S.NoticeProgress>
          </S.NoticeBackground>
          <S.SelectionPart>
            {isTrend ? (
              <>
                <S.SelectionContainer>
                  <S.SelectedText>트렌딩</S.SelectedText>
                  <S.SelectedBar />
                </S.SelectionContainer>
                <S.NotSelectedText onClick={handleSelection}>
                  토픽
                </S.NotSelectedText>
              </>
            ) : (
              <>
                <S.NotSelectedText onClick={handleSelection}>
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
              <S.PostPartText>이주의 트랜드</S.PostPartText>
            ) : (
              <S.CategoryPart>
                <S.CategoryContainer
                  radius={
                    category === '책' || category === 'OTT'
                      ? '10px 10px 0 0'
                      : '10px'
                  }
                >
                  <S.CategoryInnerContainer>
                    {['뷰티/패션', '책', 'OTT', '생활', '건강', '여행'].map(
                      (item, index) => (
                        <S.CategoryText
                          key={index}
                          onClick={() => handleCategoryClick(item)}
                          color={category === item ? '#ffc300' : '#999'}
                        >
                          {item}
                        </S.CategoryText>
                      )
                    )}
                  </S.CategoryInnerContainer>
                </S.CategoryContainer>

                {category === '책' || category === 'OTT' ? (
                  <S.BookOTTContainer>
                    <S.CategoryInnerContainer>
                      {category === '책' &&
                        ['시', '문학', '비문학', '전공', '기타'].map(
                          (item, index) => (
                            <S.CategoryText
                              key={index}
                              onClick={() => handleBookClick(item)}
                              color={selectedBook === item ? '#ffc300' : '#999'}
                            >
                              {item}
                            </S.CategoryText>
                          )
                        )}
                      {category === 'OTT' &&
                        ['Wavve', 'TVING', 'WATCHA', 'Disney+', 'Netflix'].map(
                          (item, index) => (
                            <S.CategoryText
                              key={index}
                              onClick={() => handleOTTClick(item)}
                              color={selectedOTT === item ? '#ffc300' : '#999'}
                            >
                              {item}
                            </S.CategoryText>
                          )
                        )}
                    </S.CategoryInnerContainer>
                  </S.BookOTTContainer>
                ) : null}
              </S.CategoryPart>
            )}
            <S.PostBackground>
              <S.PostContainer>
                <S.ProfileContainer>
                  <S.ProfileImage>
                    <ProfileIcon />
                  </S.ProfileImage>
                  <S.PostAuthorName>류지민</S.PostAuthorName>
                </S.ProfileContainer>
                <S.PostTextContainer>
                  <S.PostTitle>요즘은 제주가 최고</S.PostTitle>
                  <S.PostContent>
                    날씨가 좋은 봄 저는 제주도를 찾았는데요. 봄이라 그런지 날도
                    따듯하고 가족끼리 여행온 사람들도 많이 보이더라구요. 바다는
                    강원도가 최고라고 생각했던게 무색하게 제주 바다도 너무
                    예쁘더라구요. 그럼 지금부터 4인가족 제주 4박 5일 여행 코스,
                    제주 여행 꿀팁 알려드릴게요! 그 언젠가 나를 위해 꽃다발을
                    전해주던 그 소녀 오늘따라 그 소녀가 왜 이렇게 보고 싶을까
                    비에 젖은 풀잎저럼 단발머릴 곱게빗은 그 소녀 반짝이는 눈
                    망울이 내 마음에
                  </S.PostContent>
                </S.PostTextContainer>
                <S.LikeCommentContainer>
                  <S.DivideContainer>
                    <CommentIcon />
                    <S.PostCountText>12</S.PostCountText>
                  </S.DivideContainer>
                  <S.DivideContainer>
                    <LikeCountIcon />
                    <S.PostCountText>50</S.PostCountText>
                  </S.DivideContainer>
                </S.LikeCommentContainer>
              </S.PostContainer>
              <S.PostThumbnail src={Dolphin} />
            </S.PostBackground>
            <S.PostBackground>
              <S.PostContainer>
                <S.ProfileContainer>
                  <S.ProfileImage>
                    <ProfileIcon />
                  </S.ProfileImage>
                  <S.PostAuthorName>류지민</S.PostAuthorName>
                </S.ProfileContainer>
                <S.PostTextContainer>
                  <S.PostTitle>요즘은 제주가 최고</S.PostTitle>
                  <S.PostContent>
                    날씨가 좋은 봄 저는 제주도를 찾았는데요. 봄이라 그런지 날도
                    따듯하고 가족끼리 여행온 사람들도 많이 보이더라구요. 바다는
                    강원도가 최고라고 생각했던게 무색하게 제주 바다도 너무
                    예쁘더라구요. 그럼 지금부터 4인가족 제주 4박 5일 여행 코스,
                    제주 여행 꿀팁 알려드릴게요! 그 언젠가 나를 위해 꽃다발을
                    전해주던 그 소녀 오늘따라 그 소녀가 왜 이렇게 보고 싶을까
                    비에 젖은 풀잎저럼 단발머릴 곱게빗은 그 소녀 반짝이는 눈
                    망울이 내 마음에
                  </S.PostContent>
                </S.PostTextContainer>
                <S.LikeCommentContainer>
                  <S.DivideContainer>
                    <CommentIcon />
                    <S.PostCountText>12</S.PostCountText>
                  </S.DivideContainer>
                  <S.DivideContainer>
                    <LikeCountIcon />
                    <S.PostCountText>50</S.PostCountText>
                  </S.DivideContainer>
                </S.LikeCommentContainer>
              </S.PostContainer>
              <S.PostThumbnail src={Dolphin} />
            </S.PostBackground>
          </S.PostPart>
          <S.WriteButton>
            <WriteButton />
          </S.WriteButton>
        </S.MainContainer>
      </S.Background>
    </>
  );
};

export default Main;
