import * as S from './style';
import { LikeButtonIcon, ClickedLikeIcon } from '../../../asset';
import { useState } from 'react';
import { instance } from '../../../apis';

const Like = ({ likes, id }) => {
  const [clicked, setClicked] = useState(false);

  const handleLikeClick = async () => {
    try {
      await instance
        .post(`/post/like/${id}`)
        .then((res) => {
          alert(res.data);
          setClicked((pre)=>!pre);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('인증에 문제가 발생했어요');
      } else if (error.response && error.response.status === 403) {
        console.log('다시 로그인 해주세요');
      }
    }
  };

  return (
    <S.LikeBackgroundContainer>
      <S.LikeBackground>
        <S.LikeButtonIcon onClick={()=>handleLikeClick()}>
          {clicked ? <ClickedLikeIcon /> : <LikeButtonIcon />}
        </S.LikeButtonIcon>
        <S.LikeCountText>{likes}</S.LikeCountText>
      </S.LikeBackground>
    </S.LikeBackgroundContainer>
  );
};

export default Like;
