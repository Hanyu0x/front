import styled, { css } from "styled-components";

// 크기 변형
const sizeCSS = {
  h1: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h1};
    line-height: ${({ theme }) => theme.FONT_LINE.h1};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h2};
    line-height: ${({ theme }) => theme.FONT_LINE.h2};
  `,
  h3: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h3};
    line-height: ${({ theme }) => theme.FONT_LINE.h3};
  `,
  h4: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h4};
    line-height: ${({ theme }) => theme.FONT_LINE.h4};
  `,
  h5: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h5};
    line-height: ${({ theme }) => theme.FONT_LINE.h5};
  `,  
  h6: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h6};
    line-height: ${({ theme }) => theme.FONT_LINE.h6};
  `,
  h7: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    line-height: ${({ theme }) => theme.FONT_LINE.h7};
  `,
  h8: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h8};
    line-height: ${({ theme }) => theme.FONT_LINE.h8};
  `,
  h9: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.h9};
    line-height: ${({ theme }) => theme.FONT_LINE.h9};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    line-height: ${({ theme }) => theme.FONT_LINE.medium};
  `,
  bttxt: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.bttxt};
    line-height: ${({ theme }) => theme.FONT_LINE.bttxt};
  `,
  linktxt: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.linktxt};
    line-height: ${({ theme }) => theme.FONT_LINE.linktxt};
  `,
};

// padding 변형
const paddingCSS = {
  small: css`
    padding: 6px 16px;
  `,
  mediumSmall: css`
    padding: 10px 16px;
  `,
  smallMedium: css`
    padding: 12px 22px;
  `,
  medium: css`
    padding: 10px 40px;
  `,
  large: css`
    padding: 15px 50px;
  `,
  full: css`
    padding: 16px 0;
  `,
  fullWidth: css`
    width: 100%;
    padding: 16px 100px;
  `,
};

// 배경색 변형
const backgroundColorCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.PALLETE.primary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.PALLETE.secondary};
  `,
  white: css`
    background-color: ${({ theme }) => theme.PALLETE.white};
  `,
  transparent: css`
    background-color: transparent;
  `,
  gray01: css`
    background-color: ${({ theme }) => theme.PALLETE.gray.greyscale01};
  `,
  gray02: css`
    background-color: ${({ theme }) => theme.PALLETE.gray.greyscale02};
  `,
  gray03: css`
    background-color: ${({ theme }) => theme.PALLETE.gray.greyscale03};
  `,
  gray04: css`
    background-color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
  `,
  gray05: css`
    background-color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
  `,
};

// 폰트 두께
const fontWeightCSS = {
  thin: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.thin};
  `,
  extraLight: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.extraLight};
  `,
  light: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
  `,
  regular: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  `,
  medium: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  `,
  semiBold: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.semiBold};
  `,
  bold: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  `,
  extraBold: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.extraBold};
  `,
  black: css`
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.black};
  `,
};

// 색상 변형 (텍스트 색상)
const colorCSS = {
  primary: css`
    color: ${({ theme }) => theme.PALLETE.primary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.PALLETE.secondary};
  `,
  white: css`
    color: ${({ theme }) => theme.PALLETE.white};
  `,
  gray01: css`
    color: ${({ theme }) => theme.PALLETE.gray.greyscale01};
  `,
  gray02: css`
    color: ${({ theme }) => theme.PALLETE.gray.greyscale02};
  `,
  gray03: css`
    color: ${({ theme }) => theme.PALLETE.gray.greyscale03};
  `,
  gray04: css`
    color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
  `,
  gray05: css`
    color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
  `,
};



// 모양 변형
const shapeCSS = {
  square: css`
    border-radius: 4px;
  `,
  rounded: css`
    border-radius: 8px;
  `,
  pill: css`
    border-radius: 30px;
  `,
};

// Border 스타일 변형
const borderCSS = {
  none: css`
    border: none;
  `,
  primary: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.primary};
  `,
  secondary: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.secondary};
  `,
  gray01: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale01};
  `,
  gray02: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale02};
  `,
  gray03: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale03};
  `,
  gray04: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale04};
  `,
  gray05: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale05};
  `,
  white: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.white};
  `,
  error: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.error};
  `,
  sky: css`
    border: 1px solid ${({ theme }) => theme.PALLETE.sky};
  `,
};

// Border 두께 변형
const borderWidthCSS = {
  thin: css`
    border-width: 1px;
  `,
  medium: css`
    border-width: 2px;
  `,
  thick: css`
    border-width: 3px;
  `,
};

// 폰트 라인 변형
const lineHeightCSS = {
  h1: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h1};
  `,
  h2: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h2};
  `,
  h3: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h3};
  `,
  h4: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h4};
  `,
  h5: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h5};
  `,
  h6: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h6};
  `,
  h7: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h7};
  `,
  h8: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h8};
  `,
  h9: css`
    line-height: ${({ theme }) => theme.FONT_LINE.h9};
  `,
  medium: css`
    line-height: ${({ theme }) => theme.FONT_LINE.medium};
  `,
  bttxt: css`
    line-height: ${({ theme }) => theme.FONT_LINE.bttxt};
  `,
  linktxt: css`
    line-height: ${({ theme }) => theme.FONT_LINE.linktxt};
  `,
};

// IconButton 내부 레이아웃 (아이콘 + 텍스트)
const ButtonContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ $iconPosition }) =>
    $iconPosition === "right" &&
    css`
      flex-direction: row-reverse;
    `}
`;

const BaseButton = styled.button`
  display: inline-block;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  text-align: center;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  /* padding 변형 */
  ${paddingCSS.medium}
  ${({ padding }) => padding && paddingCSS[padding]}
  
  /* 기본 크기 (medium) */
  ${sizeCSS.medium}
  
  /* 크기 변형 */
  ${({ size }) => size && sizeCSS[size]}
  
  /* 배경색 */
  ${({ backgroundColor, variant }) => {
    if (backgroundColor) {
      return backgroundColorCSS[backgroundColor] || css`background-color: ${backgroundColor};`;
    }
    if (variant === "outline" || variant === "ghost") {
      return backgroundColorCSS.transparent;
    }
    return backgroundColorCSS.primary;
  }}
  
  /* 색상 변형 (기본값: primary) */
  ${({ color }) => color && colorCSS[color]}
  
  /* 모양 변형 (기본값: rounded) */
  ${shapeCSS.rounded}
  ${({ shape }) => shape && shapeCSS[shape]}
  
  /* Border 스타일 (기본값: none) */
  ${borderCSS.none}
  ${({ border }) => border && borderCSS[border]}
  
  /* 커스텀 border 색상 */
  ${({ border, theme }) =>
    border === "white" &&
    css`
      border: 1px solid ${theme.PALLETE.white};
    `}
  
  /* Border 두께 (border가 설정된 경우에만 적용) */
  ${({ borderWidth, border }) =>
    borderWidth && border && borderWidthCSS[borderWidth]}
  
  /* disabled 상태 */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* 폰트 두께 */
  ${({ fontWeight }) => fontWeight && fontWeightCSS[fontWeight]}
  /* 폰트 라인 */
  ${({ lineHeight }) => lineHeight && lineHeightCSS[lineHeight]}
  /* full width 옵션 */
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;


export { BaseButton, ButtonContent };
export default BaseButton;