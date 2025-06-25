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
      const params = { keyword: keyword };
      const res = await instance.get(`/post/search`, { params });
      setList(res.data.posts);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("인증에 문제가 발생했습니다.");
      } else if (error.response && error.response.status === 403) {
        toast.error("권한이 없습니다.");
      }
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
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
      }
    };
    getPost();
  }, [category]);

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
            {list &&
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
                      <S.PostTitle>{item.title}</S.PostTitle>
                      <S.PostContent>{item.content}</S.PostContent>
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
