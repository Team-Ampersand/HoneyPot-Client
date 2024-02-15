import React, { useState } from 'react';
import * as S from './style';
import Header from '../Header';
import { ThumbnailImg } from '../../asset';
import axios from 'axios';
import { useNavigate } from 'react-router';
import instance from '../../apis/refresh';

const Thumbnail = () => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  const handleSubmit = async () => {
    try {
      await instance.post(`/previewImage`, {
        previewImage: thumbnail,
      });
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('썸네일이 잘못 되었습니다.');
      } else if (error.response && error.response.status === 403) {
        console.log('다시 로그인 해주세요');
      }
    }
  };

  return (
    <S.Background>
      <Header />
      <S.MainContainer>
        <S.ThumbnailContainer>
          <S.TextContainer>
            <S.Text>썸네일 업로드</S.Text>
          </S.TextContainer>
          <S.UploadImgContainer style={thumbnail === null ? {} : { background: '#fff' }}>
            {thumbnail === null ? (
              <>
                <input onChange={handleFileChange} type="file" accept="image/png, image/jpeg, image/jpg" style={{ display: 'none' }} />
                <ThumbnailImg />
              </>
            ) : (
              <img src={URL.createObjectURL(thumbnail)} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            )}
          </S.UploadImgContainer>

          <S.ButtonContainer>
            <S.SubmitButton onClick={handleSubmit}>등록하기</S.SubmitButton>
          </S.ButtonContainer>
        </S.ThumbnailContainer>
      </S.MainContainer>
    </S.Background>
  );
};

export default Thumbnail;
