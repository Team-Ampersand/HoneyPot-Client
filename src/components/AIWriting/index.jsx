import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  PromptTextarea,
  GenerateButton,
  ResultContainer,
  ResultTitle,
  ResultContent,
  ConfirmButton,
} from "./style";

const AIWriting = () => {
  const [prompt, setPrompt] = useState("");
  const [aiTitle, setAiTitle] = useState("");
  const [aiContent, setAiContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAIWrite = async () => {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_AI_API_KEY;

      const payload = {
        text: prompt,
        key: apiKey,
      };
      console.log("Request payload:", payload);

      const response = await fetch(
        "https://translate-api-school.gosport.kr/result",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const content = data.result;
        const [titleLine, ...bodyLines] = content.split("\n");
        setAiTitle(titleLine.replace("[제목]", "").trim());
        setAiContent(bodyLines.join("\n").trim());
      } else {
        alert("AI 글 생성 실패: " + response.status);
      }
    } catch (e) {
      alert("서버 통신 오류: " + e.message);
    }
    setLoading(false);
  };

  const handleConfirm = () => {
    localStorage.setItem("aiTitle", aiTitle);
    localStorage.setItem("aiContent", aiContent);
    navigate("/writing");
  };

  return (
    <Container>
      <Title>AI로 글 작성하기</Title>
      <PromptTextarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="프롬프트를 입력하세요"
        rows={5}
      />
      <GenerateButton
        onClick={handleAIWrite}
        disabled={loading || !prompt.trim()}
        loading={loading}
      >
        {loading ? "생성 중..." : "AI로 글 생성"}
      </GenerateButton>
      {aiTitle && (
        <ResultContainer>
          <ResultTitle>제목: {aiTitle}</ResultTitle>
          <ResultContent>{aiContent}</ResultContent>
          <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
        </ResultContainer>
      )}
    </Container>
  );
};

export default AIWriting;
