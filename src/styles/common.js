// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일
import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexBeetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const flexBeetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const h1 = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
  line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["extraBold"]};
`

export const h2 = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
  line-height: ${({theme}) => theme.FONT_LINE["t2"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["extraBold"]};
`

export const h3 = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
  line-height: ${({theme}) => theme.FONT_LINE["h3"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
`

export const h3Strong = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
  line-height: ${({theme}) => theme.FONT_LINE["h3"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["extraBold"]};
`

export const h4 = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
  line-height: ${({theme}) => theme.FONT_LINE["h4"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
`

export const h4Strong = css`
  font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
  line-height: ${({theme}) => theme.FONT_LINE["h4"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["extraBold"]};
`

export const btTxt = css`
  font-size: ${({theme}) => theme.FONT_SIZE["bttxt"]};
  line-height: ${({theme}) => theme.FONT_LINE["brtxt"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
`


export const btTxtStrong = css`
  font-size: ${({theme}) => theme.FONT_SIZE["bttxt"]};
  line-height: ${({theme}) => theme.FONT_LINE["brtxt"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"]};
`


export const paragraph = css`
  font-size: ${({theme}) => theme.FONT_SIZE["p"]};
  line-height: ${({theme}) => theme.FONT_LINE["p"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["regular"]};
`

export const paragraphStrong = css`
  font-size: ${({theme}) => theme.FONT_SIZE["p"]};
  line-height: ${({theme}) => theme.FONT_LINE["p"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["extraBold"]};
`

export const linkTxt = css`
  font-size: ${({theme}) => theme.FONT_SIZE["linktxt"]};
  line-height: ${({theme}) => theme.FONT_LINE["linktxt"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["medium"]};
`

export const linkTxtStrong = css`
  font-size: ${({theme}) => theme.FONT_SIZE["linktxt"]};
  line-height: ${({theme}) => theme.FONT_LINE["linktxt"]};
  font-weight: ${({theme}) => theme.FONT_WEIGHT["semiBold"]};
`

// 생활정보 뱃지
export const badge = css`
  ${paragraph}
  background-color: ${({theme}) => theme.PALLETE["primary"]} ;
  color: ${({theme}) => theme.PALLETE["greyscale01"]} ;
`

// 로그인, 회원가입 버튼
export const loginBtn = css`
  ${h3}
  background-color: ${({theme}) => theme.PALLETE["primary"]} ;
  color: ${({theme}) => theme.PALLETE["white"]} ;
  padding: 6px 16px;
  border-radius: 30px;
`





