import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import * as S from './style';
import Header from '../Header';
import {
  AddH1Text,
  AddH2Text,
  AddH3Text,
  AddH4Text,
  AddBoldStyleText,
  AddItalicText,
  AddTextMiddleline,
  OptionLine,
  AddLinkText,
  AddImg,
  AddDevText,
} from '../../asset';

const Writing = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('뷰티/패션');
  const [OTT, setOTT] = useState('');
  const [book, setBook] = useState('');
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState('');

  const [selectedField, setSelectedField] = useState(null);

  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'content') {
      setContent(value);
    }
  };

  const selectCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleBookClick = (field) => {
    setSelectedField(field);
    setBook(field);
  };

  const handleOTTClick = (field) => {
    setSelectedField(field);
    setOTT(field);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setImages((imgs) => [...imgs, files]);
  };

  const handleRegistration = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('OTT', OTT);
    formData.append('book', book);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    axios
      .post(`${process.env.REACT_APP_SIGNIN_API}/letter/write`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        // Handle errors
        if (error.response && error.response.status === 400) {
          alert('글을 다시 작성해주세요.');
          console.error('에러 발생:', error);
        } else if (error.response && error.response.status === 403) {
          console.log('다시 로그인 해주세요');
          console.error('에러 발생:', error);
        }
      });
  };

  const handleOption = (option) => {
    const optionMappings = {
      H1Text: '# ',
      H2Text: '## ',
      H3Text: '### ',
      H4Text: '#### ',
      BoldText: '**',
      ItalicText: '_',
      MiddlelineText: '~~',
      LinkText: '[텍스트](링크를 입력해주세요)',
      DevText: '```',
    };

    const optionText = optionMappings[option];

    const newText =
      content +
      (option === 'LinkText'
        ? optionText
        : optionText + '텍스트' + (option === 'BoldText' || option === 'ItalicText' || option === 'MiddlelineText' || option === 'DevText' ? optionText : ''));
    setContent(newText);
  };

  return (
    <S.Background>
      <Header />
      <S.WritingContainer>
        <S.FunctionContainer>
          <S.CategoryContainer>
            <S.CategoryTitle>카테고리</S.CategoryTitle>
            <S.CategorySelect value={category} onChange={selectCategory}>
              <S.CategoryOption>뷰티/패션</S.CategoryOption>
              <S.CategoryOption>책</S.CategoryOption>
              <S.CategoryOption>OTT</S.CategoryOption>
              <S.CategoryOption>생활</S.CategoryOption>
              <S.CategoryOption>건강</S.CategoryOption>
              <S.CategoryOption>여행</S.CategoryOption>
            </S.CategorySelect>
          </S.CategoryContainer>
          <S.OptionContainer>
            <S.HeaderOption>
              <S.OptionLabel onClick={() => handleOption('H1Text')}>
                <AddH1Text />
              </S.OptionLabel>
              <S.OptionLabel onClick={() => handleOption('H2Text')}>
                <AddH2Text />
              </S.OptionLabel>
              <S.OptionLabel onClick={() => handleOption('H3Text')}>
                <AddH3Text />
              </S.OptionLabel>
              <S.OptionLabel onClick={() => handleOption('H4Text')}>
                <AddH4Text />
              </S.OptionLabel>
            </S.HeaderOption>
            <OptionLine />
            <S.TextOption>
              <S.OptionLabel onClick={() => handleOption('BoldText')}>
                <AddBoldStyleText />
              </S.OptionLabel>
              <S.OptionLabel onClick={() => handleOption('ItalicText')}>
                <AddItalicText />
              </S.OptionLabel>
              <S.OptionLabel onClick={() => handleOption('MiddlelineText')}>
                <AddTextMiddleline />
              </S.OptionLabel>
            </S.TextOption>
            <OptionLine />
            <S.AddOption>
              <S.OptionLabel onClick={() => handleOption('LinkText')}>
                <AddLinkText />
              </S.OptionLabel>
              <S.OptionLabel>
                <AddImg />
                <input onClick={handleFileChange} type="file" accept="image/png, image/jpeg, image/jpg" style={{ display: 'none' }} />
              </S.OptionLabel>
              <S.OptionLabel onChange={() => handleOption('DevText')}>
                <AddDevText />
              </S.OptionLabel>
            </S.AddOption>
          </S.OptionContainer>
        </S.FunctionContainer>
        {category === '책' || category === 'OTT' ? (
          <S.FieldContainer>
            {category === '책' && (
              <>
                <S.FieldText onClick={() => handleBookClick('시')} style={{ color: selectedField === '시' ? '#ffc300' : 'inherit' }}>
                  시
                </S.FieldText>
                <S.FieldText onClick={() => handleBookClick('문학')} style={{ color: selectedField === '문학' ? '#ffc300' : 'inherit' }}>
                  문학
                </S.FieldText>
                <S.FieldText onClick={() => handleBookClick('비문학')} style={{ color: selectedField === '비문학' ? '#ffc300' : 'inherit' }}>
                  비문학
                </S.FieldText>
                <S.FieldText onClick={() => handleBookClick('전공')} style={{ color: selectedField === '전공' ? '#ffc300' : 'inherit' }}>
                  전공
                </S.FieldText>
                <S.FieldText onClick={() => handleBookClick('기타')} style={{ color: selectedField === '기타' ? '#ffc300' : 'inherit' }}>
                  기타
                </S.FieldText>
              </>
            )}

            {category === 'OTT' && (
              <>
                <S.FieldText onClick={() => handleOTTClick('Wavve')} style={{ color: selectedField === 'Wavve' ? '#ffc300' : 'inherit' }}>
                  Wavve
                </S.FieldText>
                <S.FieldText onClick={() => handleOTTClick('TVING')} style={{ color: selectedField === 'TVING' ? '#ffc300' : 'inherit' }}>
                  TVING
                </S.FieldText>
                <S.FieldText onClick={() => handleOTTClick('WATCHA')} style={{ color: selectedField === 'WATCHA' ? '#ffc300' : 'inherit' }}>
                  WATCHA
                </S.FieldText>
                <S.FieldText onClick={() => handleOTTClick('Disney+')} style={{ color: selectedField === 'Disney+' ? '#ffc300' : 'inherit' }}>
                  Disney+
                </S.FieldText>
                <S.FieldText onClick={() => handleOTTClick('Netflix')} style={{ color: selectedField === 'Netflix' ? '#ffc300' : 'inherit' }}>
                  Netflix
                </S.FieldText>
              </>
            )}
          </S.FieldContainer>
        ) : null}
        <S.Title type="text" name="title" value={title} onChange={onChangeInput} placeholder="제목을 입력하세요." />
        <S.TextDetail name="content" value={content} onChange={onChangeInput} placeholder="내용을 작성해주세요."></S.TextDetail>
        <S.ButtonContainer>
          <S.SubmitButton onClick={handleRegistration}>등록하기</S.SubmitButton>
        </S.ButtonContainer>
      </S.WritingContainer>
    </S.Background>
  );
};

export default Writing;
