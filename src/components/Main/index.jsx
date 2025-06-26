import React, { useEffect, useState } from "react";
import Header from "../Header";
import * as S from "./style";
import {
  AddPost,
  LikeCountIcon,
  NoticeImg,
  ProfileIcon,
  Thumbnail,
} from "../../asset";
import { instance } from "../../apis";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import WriteModal from "../common/Modal/WriteModal";
import SkeletonPost from "./SkeletonPost";

const CATEGORY_MAP = {
  BEAUTY: "뷰티/패션",
  BOOK: "책",
  OTT: "OTT",
  LIFE: "라이프",
  HEALTH: "건강",
  TRAVEL: "여행",
};
const CATEGORY_ENG = Object.keys(CATEGORY_MAP);

const Main = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState("BEAUTY");
  const [selectedBook, setSelectedBook] = useState("POETRY");
  const [selectedOTT, setSelectedOTT] = useState("WAVVE");
  const [keyword, setKeyword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelection = (name, value) => {
    if (name === "category") {
      setCategory(value);
    } else if (name === "book") {
      setSelectedBook(value);
    } else if (name === "ott") {
      setSelectedOTT(value);
    }
  };

  const writingKeyword = (e) => setKeyword(e.target.value);

  const searchKeyword = async () => {
    try {
      setLoading(true);
      const params = { keyword: keyword };
      const res = await instance.get(`/post/search`, { params });
      setList(res.data.posts);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("인증에 문제가 발생했습니다.");
      } else if (error.response && error.response.status === 403) {
        toast.error("권한이 없습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const params = { category: category };
        const res = await instance.get(`/post/list`, { params });
        setList(res.data.posts);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.warning("카테고리가 잘못되었습니다");
        } else if (error.response && error.response.status === 401) {
          toast.error("인증에 문제가 발생했습니다.");
        } else if (error.response && error.response.status === 403) {
          toast.error("권한이 없습니다.");
        }
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [category]);

  function stripMarkdown(md) {
    return (
      md
        // 헤더, 리스트, 인라인코드, 볼드, 이탤릭, 취소선, 인용문, 구분선 등
        .replace(/^\\s{0,3}(#{1,6})\\s+/gm, "") // 헤더
        .replace(/\\*\\*(.*?)\\*\\*/g, "$1") // 볼드
        .replace(/\\*(.*?)\\*/g, "$1") // 이탤릭
        .replace(/__(.*?)__/g, "$1") // 볼드(언더바)
        .replace(/_(.*?)_/g, "$1") // 이탤릭(언더바)
        .replace(/~~(.*?)~~/g, "$1") // 취소선
        .replace(/`([^`]+)`/g, "$1") // 인라인 코드
        .replace(/>\\s?/g, "") // 인용문
        .replace(/^-\\s+/gm, "") // 리스트
        .replace(/^\\s*\\d+\\.\\s+/gm, "") // 번호 리스트
        .replace(/!\\[[^\\]]*\\]\\([^\\)]*\\)/g, "") // 이미지
        .replace(/\\[[^\\]]*\\]\\([^\\)]*\\)/g, "") // 링크
        .replace(/\\r?\\n|\\r/g, " ") // 줄바꿈을 공백으로
        .replace(/\\s{2,}/g, " ") // 여러 공백 하나로
        .replace(/[*#_`~\\-]/g, "") // 남은 특수문자
        .trim()
    );
  }

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
          <S.PostPart>
            <S.CategoryPart>
              <S.CategoryContainer
                radius={
                  category === "BOOK" || category === "OTT"
                    ? "10px 10px 0 0"
                    : "10px"
                }
              >
                <S.CategoryInnerContainer>
                  {CATEGORY_ENG.map((item, index) => (
                    <S.CategoryText
                      key={index}
                      onClick={() => handleSelection("category", item)}
                      color={category === item ? "#ffc300" : "#999"}
                    >
                      {CATEGORY_MAP[item]}
                    </S.CategoryText>
                  ))}
                </S.CategoryInnerContainer>
              </S.CategoryContainer>
            </S.CategoryPart>
            {loading ? (
              <>
                <SkeletonPost />
                <SkeletonPost />
                <SkeletonPost />
              </>
            ) : (
              list &&
              list.map((item) => (
                <S.PostBackground
                  key={item.postId}
                  onClick={() => navigate(`/posting/${item.postId}`)}
                >
                  <S.PostContainer>
                    <S.ProfileContainer>
                      <S.ProfileImage>
                        <ProfileIcon />
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
              ))
            )}
          </S.PostPart>
        </S.MainContainer>
        <S.WriteButton onClick={() => setShowModal(true)}>
          <AddPost />
        </S.WriteButton>
      </S.Background>
      {showModal && (
        <WriteModal
          onClose={() => setShowModal(false)}
          onAIWrite={() => {
            setShowModal(false);
            navigate("/ai-writing");
          }}
          onWrite={() => {
            setShowModal(false);
            navigate("/writing");
          }}
        />
      )}
    </>
  );
};

export default Main;
