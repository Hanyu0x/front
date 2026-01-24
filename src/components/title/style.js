import styled from "styled-components";

const S = {};

S.TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

S.TitleMain = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({theme}) => theme.FONT_SIZE.h2};
  line-height: ${({theme}) => theme.FONT_LINE.h2};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.extraBold};
`;

S.TitleHighlight = styled.span`
  color: ${({theme}) => theme.PALLETE.primary};
`;

S.TitleText = styled.span`
  color: ${({theme}) => theme.PALLETE.black};
`;

S.TitleIcon = styled.span`
  display: inline-flex;
  align-items: center;
`;

S.TitleSubtitle = styled.p`
  font-size: ${({theme}) => theme.FONT_SIZE.h6};
  line-height: ${({theme}) => theme.FONT_LINE.h6};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  color: ${({theme}) => theme.PALLETE.gray.greyscale05};
  margin: 0;
`;

export default S;