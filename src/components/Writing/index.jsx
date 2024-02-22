import React, { useState } from 'react';
import { useNavigate } from 'react-router';
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
import instance from '../../apis/refresh';

const Writing = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('뷰티/패션');
  const [OTT, setOTT] = useState('');
  const [book, setBook] = useState('');
  const [images, setImages] = useState([]);

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

  const selectCategory = (e) => setCategory(e.target.value);

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

    instance
      .post(`/post/write`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        navigate('/thumbnail');
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
            {category === '책' &&
              ['시', '문학', '비문학', '전공', '기타'].map((item, index) => (
                <S.FieldText key={index} onClick={() => handleBookClick(item)} style={{ color: selectedField === item ? '#ffc300' : 'inherit' }}>
                  {item}
                </S.FieldText>
              ))}
            {category === 'OTT' &&
              ['Wavve', 'TVING', 'WATCHA', 'Disney+', 'Netflix'].map((item, index) => (
                <S.FieldText key={index} onClick={() => handleOTTClick(item)} style={{ color: selectedField === item ? '#ffc300' : 'inherit' }}>
                  {item}
                </S.FieldText>
              ))}
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
