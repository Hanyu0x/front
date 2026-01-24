import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};


S.CommunityListItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  border-bottom: 2px solid #E0E7EE;
  `;

S.Link = styled(Link)`
  color: inherit  ;
  text-decoration: none  ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

S.CommunityListItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

S.CommunityListItemTitle = styled.h3`
  font-size: ${({theme}) => theme.FONT_SIZE.h4};
  line-height: ${({theme}) => theme.FONT_LINE.h4};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.extraBold};
  color: ${({theme}) => theme.PALLETE.black};
  margin-bottom: 5px;
`;

S.CommunityListItemDescription = styled.p`
  font-size: ${({theme}) => theme.FONT_SIZE.p};
  line-height: ${({theme}) => theme.FONT_LINE.p};
  font-weight: ${({theme}) => theme.FONT_WEIGHT.regular};
  color: ${({theme}) => theme.PALLETE.gray.greyscale05};
  /* 한줄넘어가면... 줄바꿈 처리 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  width: 100%;
  display: block;
  word-break: break-all;
  word-wrap: break-word;
  word-break: break-word;
  word-break: break-word;
  margin-bottom: 5px;
`;

S.UserInfoWrap = styled.div`
  display: flex;
  gap: 10px;
  color: ${({theme}) => theme.PALLETE.gray.greyscale05};
  margin-bottom: 20px;
`;

S.CommunityListItemFooter = styled.div`
  display: flex;
  gap: 10px;
  color: ${({theme}) => theme.PALLETE.gray.greyscale05};
`;

S.IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

S.CommunityListItemImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 145px;
  border-radius: 10px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;



export default S;