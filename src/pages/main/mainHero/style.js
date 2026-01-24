import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};


S.HeroContainer = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #B15EFF 0%, #2D66F5 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  text-align: center;
  padding: 280px 0 180px;
`;

S.HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

S.HeroTitleText = styled.div`
  font-size: 55px;
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  & b {
    display: block;
    font-weight: ${({theme}) => theme.FONT_WEIGHT.extraBold};
  };
`;

S.HeroDescription = styled.p`
  font-size: ${({theme}) => theme.FONT_SIZE.h3};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  line-height: ${({theme}) => theme.FONT_LINE.brtxt};
  margin: 26px 0 63px;
`;

S.HeroButton = styled.div`
  display: flex;
  gap: 20px;
`;

S.HeroButtonItem = styled.div`
  background: ${({theme}) => theme.PALLETE.white};
  color: ${({theme}) => theme.PALLETE.black};
  padding: 10px 25px;
  border-radius: 50px;
  font-size: ${({theme}) => theme.FONT_SIZE.p};
  line-height: ${({theme}) => theme.FONT_LINE.brtxt};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    font-weight: ${({theme}) => theme.FONT_WEIGHT.medium};
    color: ${({theme}) => theme.PALLETE.primary};
    transform: scale(1.05);
    transition: all 0.3s ease;
    
  }
  `;

S.Link = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
`;

export default S;
