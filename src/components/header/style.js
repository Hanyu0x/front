import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {};

S.HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.PALLETE.background.white};
  color: #0B1215;
  font-family: 'pretendard';
  font-size: ${({theme}) => theme.FONT_SIZE.h5};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.extraBold};
  line-height: ${({theme}) => theme.FONT_LINE.h1};
`;

S.HeaderInner = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

S.Logo = styled.div``;

S.Img = styled.img`
  width: ${({width}) => width || 'auto'};
  max-width: ${({maxWidth}) => maxWidth || '100%'};
`;

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight:inherit;
`;

S.HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 110px;
`;

S.HeaderMenus = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export default S;