import React from 'react';
import * as S from './style';
import Header from '../Header';
import { AddReply, Dolphin, ProfileIcon } from '../../asset';
const Posting = () => {
  return (
    <S.Background>
      <Header />
      <S.PostBackground>
        <S.PostContainer>
          <S.ContentContainer>
            <S.ContentTitle>요즘은 제주가 최고!!</S.ContentTitle>
            <S.CreationContainer>
              <S.DivideContainer>
                <S.CreationText>류지민</S.CreationText>
                <S.CreationText>2024 - 01 - 20</S.CreationText>
              </S.DivideContainer>
              <S.DivideContainer>
                <S.FunctionText>수정</S.FunctionText>
                <S.FunctionText>삭제</S.FunctionText>
              </S.DivideContainer>
            </S.CreationContainer>
            <S.TextContainer>
              <S.ContentText>
                날씨가 좋은 봄 저는 제주도를 찾았는데요. 봄이라 그런지 날도
                따듯하고 가족끼리 여행온 사람들도 많이 보이더라구요. 바다는
                강원도가 최고라고 생각했던게 무색하게 제주 바다도 너무
                예쁘더라구요. 그럼 지금부터 4인가족 제주 4박 5일 여행 코스, 제주
                여행 꿀팁 알려드릴게요! 그 언젠가 나를 위해 꽃다발을 전해주던 그
                소녀 오 늘따라 그 소녀가 왜 이렇게 보고 싶을까 비에 젖은
                풀잎저럼 단발머릴 곱게 빗은 그 소녀 반짝이는 눈 망울이 내 마음에
                되살아나네 내 마음 외로워 질때면 그 날을 생각하고 그 날이 그리워
                질때면 꿈길을 헤매는데 못잊을 그리움 남기고 그 소녀 데려간
                세월이 미워라
              </S.ContentText>
              <S.HText>제주 돌고래 스팟</S.HText>
              <S.ContentImage src={Dolphin} />
              <S.ContentText>
                날씨가 좋은 봄 저는 제주도를 찾았는데요. 봄이라 그런지 날도
                따듯하고 가족끼리 여행온 사람들도 많이 보이더라구요. 바다는
                강원도가 최고라고 생각했던게 무색하게 제주 바다도 너무
                예쁘더라구요. 그럼 지금부터 4인가족 제주 4박 5일 여행 코스, 제주
                여행 꿀팁 알려드릴게요! 그 언젠가 나를 위해 꽃다발을 전해주던 그
                소녀 오늘따라 그 소녀가 왜 이렇게 보고 싶을까 비에 젖은 풀잎저럼
                단발머릴 곱게빗은 그 소녀 반짝이는 눈 망울이 내 마음에
                되살아나네 내 마음 외로워 질때면 그 날을 생각하고 그 날이 그리워
                질때면 꿈길을 헤매는데 못잊을 그리움 남기고 그 소녀 데려간
                세월이 미워라 날씨가 좋은 봄저는 제주도를 찾았는데요. 봄이라
                그런지 날도 따듯하고 가족끼리 여행온 사람들도 많이 보이더라구요.
                바다는 강원도가 최고라고 생각했던게 무색하게 제주 바다도 너무
                예쁘더라구요. 그럼 지금부터 4인가족 제주 4박 5일 여행 코스, 제주
                여행 꿀팁 알려드릴게요! 그 언젠가 나를 위해 꽃다발을 전해주던 그
                소녀 오늘따라 그 소녀가 왜 이렇게 보고 싶을까 비에 젖은 풀잎저럼
                단발머릴 곱게 빗은 그 소녀반짝이는 눈 망울이 내 마음에
                되살아나네 내 마음 외로워 질때면 그 날을 생각하고 그 날이 그리워
                질때면 꿈길을 헤매는데 못잊을 그리움 남기고 그 소녀 데려간
                세월이 미워라 그 언젠가 나를 위해 꽃다발을 전해주던 그 소녀
                오늘따라 그 소녀가 왜 이렇게 보고 싶을까 비에 젖은 풀잎처럼
                단발머릴 곱게 빚은 그 소녀 오늘따라 그 소녀가 왜 이렇게 보고
                싶을
              </S.ContentText>
            </S.TextContainer>
          </S.ContentContainer>
          <S.CommentContainer>
            <S.WritingCommentContainer>
              <S.CommentNumber>1개의 댓글</S.CommentNumber>
              <S.WritingComment placeholder='댓글을 작성하세요.' />
              <S.RegistButton>댓글 작성</S.RegistButton>
            </S.WritingCommentContainer>
            <S.Comments>
              <S.CommentHeader>
                <S.ProfileContainer>
                  <S.ProfileImage>
                    <ProfileIcon />
                  </S.ProfileImage>
                  <S.CommentAuthorContainer>
                    <S.CommentAuthorName>류지민</S.CommentAuthorName>
                    <S.CommentWriteDate>3일전</S.CommentWriteDate>
                  </S.CommentAuthorContainer>
                </S.ProfileContainer>
                <S.DivideContainer>
                  <S.FunctionText>수정</S.FunctionText>
                  <S.FunctionText>삭제</S.FunctionText>
                </S.DivideContainer>
              </S.CommentHeader>
              <S.CommentBody>
                <S.CommentContent>
                  그 언젠가 나를 위해 꽃다발을 전해주던 그 소녀 오늘따라 그
                  소녀가 왜 이렇게 보고 싶을가 비에 젖은 풀잎처럼 단발머릴 곱게
                  빗은 그 소녀 반짝이는 눈망울이 내 마음에 되살아나네 내 마음
                  외로워 질때면그날을 생각하고 그 날이 그리워질 때면 꿈 길을
                  헤매는데 못잊을 그리움 남기고 그 소녀 데려간 세월이 미워라
                </S.CommentContent>
              </S.CommentBody>
              <S.AddReplyContainer>
                <AddReply />
                <S.AddReplyText>답글 달기</S.AddReplyText>
              </S.AddReplyContainer>
            </S.Comments>
          </S.CommentContainer>
        </S.PostContainer>
      </S.PostBackground>
    </S.Background>
  );
};

export default Posting;
