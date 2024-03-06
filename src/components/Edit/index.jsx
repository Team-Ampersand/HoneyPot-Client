import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
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
import { instance } from '../../apis';
import TurndownService from 'turndown';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState(0);
  const [category, setCategory] = useState('뷰티/패션');
  const [OTT, setOTT] = useState('');
  const [book, setBook] = useState('');
  const [images, setImages] = useState([]);

  const [selectedField, setSelectedField] = useState(null);

  const inputRef = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();

  const convertToMarkdown = (htmlText) => {
    const turndownService = new TurndownService();
    return turndownService.turndown(htmlText);
  };

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

  const handleRegistration = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    try {
      await instance
        .put(`/post/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then((response) => {
          navigate('/');
        });
    } catch (error) {
      // Handle errors
      if (error.response && error.response.status === 400) {
        alert('글을 다시 작성해주세요.');
        console.error('에러 발생:', error);
      } else if (error.response && error.response.status === 403) {
        console.log('다시 로그인 해주세요');
        console.error('에러 발생:', error);
      }
    }
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

    const cursorPosition = inputRef.current.selectionStart;
    const currentValue = inputRef.current.value;

    console.log(currentValue.substring(0, cursorPosition));

    const newText =
      currentValue.substring(0, cursorPosition) +
      (option === 'LinkText'
        ? optionText
        : optionText +
          '텍스트' +
          (option === 'BoldText' ||
          option === 'ItalicText' ||
          option === 'MiddlelineText' ||
          option === 'DevText'
            ? optionText
            : '')) +
      currentValue.substring(cursorPosition);
    setContent(newText);
  };

  useEffect(() => {
    if (location.state) {
      const info = location.state;
      setTitle(info.title);
      const convert = convertToMarkdown(info.content);
      setContent(convert);
      setId(info.id);
    }
  }, []);

  return (
    <S.Background>
      <Header />
      <S.WritingContainer>
        <S.FunctionContainer>
          <S.CategoryContainer>
            <S.CategoryTitle>카테고리</S.CategoryTitle>
            <S.CategorySelect value={category} onChange={selectCategory}>
              <S.CategoryOption>BEAUTY</S.CategoryOption>
              <S.CategoryOption>BOOK</S.CategoryOption>
              <S.CategoryOption>OTT</S.CategoryOption>
              <S.CategoryOption>LIFE</S.CategoryOption>
              <S.CategoryOption>HEALTH</S.CategoryOption>
              <S.CategoryOption>TRAVEL</S.CategoryOption>
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
                <input
                  onClick={handleFileChange}
                  type='file'
                  accept='image/png, image/jpeg, image/jpg'
                  style={{ display: 'none' }}
                />
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
              ['POETRY', 'LITERATURE', 'NONFICTION', 'MAJOR', 'OTHER '].map(
                (item, index) => (
                  <S.FieldText
                    key={index}
                    onClick={() => handleBookClick(item)}
                    style={{
                      color: selectedField === item ? '#ffc300' : 'inherit',
                    }}
                  >
                    {item}
                  </S.FieldText>
                )
              )}
            {category === 'OTT' &&
              ['WAVVE', 'TVING', 'WATCHA', 'DISNEP', 'NETFLIX'].map(
                (item, index) => (
                  <S.FieldText
                    key={index}
                    onClick={() => handleOTTClick(item)}
                    style={{
                      color: selectedField === item ? '#ffc300' : 'inherit',
                    }}
                  >
                    {item}
                  </S.FieldText>
                )
              )}
          </S.FieldContainer>
        ) : null}

        <S.Title
          type='text'
          name='title'
          value={title}
          onChange={onChangeInput}
          placeholder='제목을 입력하세요.'
        />
        <S.TextDetail
          name='content'
          value={content}
          onChange={onChangeInput}
          placeholder='내용을 작성해주세요.'
          ref={inputRef}
        ></S.TextDetail>
        <S.ButtonContainer>
          <S.SubmitButton onClick={handleRegistration}>수정하기</S.SubmitButton>
        </S.ButtonContainer>
      </S.WritingContainer>
    </S.Background>
  );
};

export default Edit;
