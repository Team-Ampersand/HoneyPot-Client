import styled from "styled-components";


export const LikeBackgroundContainer = styled.div`
  position: fixed;
  top: 180px;
  left: 14rem;
`

export const LikeBackground = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  gap: 8px; 
  border-radius: 40px; 
  background: #fff;
  padding: 14px 8px;
`

export const LikeButtonIcon = styled.div`
  flex-grow: 0; 
  flex-shrink: 0; 
  width: 50px; 
  height: 50px; 
  
  cursor: pointer;
`

export const LikeCountText = styled.span`
  flex-grow: 0;
  flex-shrink: 0; 
  font-family: Pretendard;
  font-size: 16px; 
  font-weight: 600; 
  text-align: left; 
  color: #707070;
`