import * as S from "./style";
import { LikeButtonIcon, ClickedLikeIcon } from "../../../asset";
import { useState, useEffect } from "react";
import { instance } from "../../../apis";
import { toast } from "react-toastify";

const Like = ({ likes: initialLikes, id, likeStatus: initialStatus }) => {
  const [clicked, setClicked] = useState(!!initialStatus);
  const [likes, setLikes] = useState(initialLikes ?? 0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setClicked(!!initialStatus);
  }, [initialStatus]);

  useEffect(() => {
    setLikes(initialLikes ?? 0);
  }, [initialLikes]);

  const handleLikeClick = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const nextClicked = !clicked;
    setClicked(nextClicked);

    try {
      const res = await instance.patch(`/post/like/${id}`);
      const serverLikes = res?.data?.likes;

      if (typeof serverLikes === "number") {
        setLikes(serverLikes);
      } else {
        // 서버 응답에 likes 없을 경우, 클라이언트 예측값으로 처리
        setLikes((prev) => (nextClicked ? prev + 1 : Math.max(prev - 1, 0)));
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("인증에 문제가 발생했어요");
      } else if (error.response?.status === 403) {
        toast.error("다시 로그인 해주세요");
      } else {
        toast.error("좋아요 처리 중 오류가 발생했어요");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <S.LikeBackgroundContainer>
      <S.LikeBackground>
        <S.LikeButtonIcon onClick={handleLikeClick}>
          {clicked ? <ClickedLikeIcon /> : <LikeButtonIcon />}
        </S.LikeButtonIcon>
        <S.LikeCountText>
          {typeof likes === "number" ? likes : 0}
        </S.LikeCountText>
      </S.LikeBackground>
    </S.LikeBackgroundContainer>
  );
};

export default Like;
