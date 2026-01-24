import styled from "styled-components";

const S = {};

S.SafetyScoreContainer = styled.div`
  width: 100%;
  background: ${({theme}) => theme.PALLETE.background.white};
  padding: 100px 0;
`;

S.SafetyScoreInner = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 20px;
`;  

S.TitleContainer = styled.div`
  margin-bottom: 40px;
`;

S.SafetyScoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

S.SafetyScoreItemContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  color: ${({theme}) => theme.PALLETE.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

S.SafetyScoreItemTitle = styled.h3`
  font-size: ${({theme}) => theme.FONT_SIZE.h3};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.extraBold};
  line-height: ${({theme}) => theme.FONT_LINE.h3};
  z-index: 1;
  margin-bottom: 10px;
  margin-top: 120px;
`;

S.SafetyScoreItemDescription = styled.p`
  font-size: ${({theme}) => theme.FONT_SIZE.h6};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  line-height: ${({theme}) => theme.FONT_LINE.h6};
  margin: 0;
  max-width: 170px;
  z-index: 1;
`;

S.SafetyScoreButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default S;