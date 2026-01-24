import React from 'react';
import S from './style';
import Icon from '../icon/Icon.jsx';

// 사용 예시
// 기본 사용법 (기존 호환)
// <Title 
//   highlightText="강남구 역삼동" 
//   text="자취 정보" 
//   iconName="search" 
//   subtitle="내가 찾던 자취 정보가 한 곳에!" 
// />
//
// 중간에 강조 텍스트가 들어가는 경우
// <Title 
//   parts={[
//     { text: "우리 동네, 얼마나" },
//     { text: "안전", highlight: true },
//     { text: "할까?" }
//   ]}
//   iconName="house" 
//   subtitle="다음의 정보를 바탕으로 동네 안전 점수를 분석합니다." 
// />
//
// Props:
// - parts: 텍스트 부분 배열 [{ text: string, highlight?: boolean }] (선택, parts가 있으면 highlightText/text 무시)
// - highlightText: 파란색으로 표시될 강조 텍스트 (parts 없을 때 사용)
// - text: 검은색으로 표시될 일반 텍스트 (parts 없을 때 사용)
// - iconName: 아이콘 이름 (선택, iconMap에 정의된 이름)
// - icon: 아이콘 이미지 src (선택, iconName보다 우선)
// - iconSize: 아이콘 크기 (선택)
// - iconColor: 아이콘 색상 (선택)
// - subtitle: 서브타이틀 텍스트 (선택, 회색 작은 글씨)
const Title = ({ 
  parts,
  highlightText, 
  text, 
  iconName, 
  icon, 
  iconSize, 
  iconColor, 
  subtitle 
}) => {
  const renderTextParts = () => {
    // parts 배열이 있으면 parts 사용
    if (parts && Array.isArray(parts)) {
      return parts.map((part, index) => {
        if (part.highlight) {
          return <S.TitleHighlight key={index}>{part.text}</S.TitleHighlight>;
        }
        return <S.TitleText key={index}>{part.text}</S.TitleText>;
      });
    }
    
    // 기존 방식 (하위 호환성)
    return (
      <>
        {highlightText && <S.TitleHighlight>{highlightText}</S.TitleHighlight>}
        {text && <S.TitleText>{text}</S.TitleText>}
      </>
    );
  };

  return (
    <S.TitleContainer>
      <S.TitleMain>
        {renderTextParts()}
        {(icon || iconName) && (
          <S.TitleIcon>
            <Icon name={iconName} src={icon} size={iconSize} color={iconColor} />
          </S.TitleIcon>
        )}
      </S.TitleMain>
      {subtitle && <S.TitleSubtitle>{subtitle}</S.TitleSubtitle>}
    </S.TitleContainer>
  );
  
};

export default Title;