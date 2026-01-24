import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};

S.Footer = styled.footer`
  width: 100%;
  background-color: ${({theme}) => theme.PALLETE.background.white};
`;

S.FooterInner = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  height: 100%;
  padding: 40px 20px;
  color: ${({theme}) => theme.PALLETE.gray.greyscale04};
  font-size: ${({theme}) => theme.FONT_SIZE.linktxt};
  line-height: ${({theme}) => theme.FONT_LINE.linktxt};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.medium};
`;

S.Logo = styled.div`
  margin-bottom: 50px;
`;


S.Img = styled.img`
  width: ${({width}) => width || 'auto'};
  max-width: ${({maxWidth}) => maxWidth || '100%'};
`;

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight:inherit;
`;

S.FooterMenus = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

S.FooterMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

S.FooterCopyright = styled.div`
  margin-top: 20px;
`;

S.FooterCopyrightText = styled.p`
  margin-bottom: 8px;
`;
export default S;