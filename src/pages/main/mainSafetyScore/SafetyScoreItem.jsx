import React from 'react';
import S from './style';

// 사용 예시:
// <SafetyScoreItem 
//   image="safety-item.png" 
//   title="CCTV 정보" 
//   description="주변 CCTV를 탐색하고\n정보를 분석합니다." 
// />
//
// Props:
// - image: 이미지 파일명 (필수, public/assets/images/ 경로에 있는 파일)
// - title: 제목 텍스트 (선택)
// - description: 설명 텍스트 (선택, \n으로 줄바꿈 가능)
const SafetyScoreItem = ({ image, title, description }) => {
  const imagePath = image ? `${process.env.PUBLIC_URL}/assets/images/${image}` : null;

  return (
    <S.SafetyScoreItemContainer>
      <img src={imagePath} alt="safety-score-item" width={100} height={100} />
      {title && <S.SafetyScoreItemTitle>{title}</S.SafetyScoreItemTitle>}
      {description && (
        <S.SafetyScoreItemDescription>
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </S.SafetyScoreItemDescription>
      )}
    </S.SafetyScoreItemContainer>
  );
};

export default SafetyScoreItem;