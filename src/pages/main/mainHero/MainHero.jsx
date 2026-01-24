import React from 'react';
import S from './style';
import Icon from '../../../components/icon/Icon';

const MainHero = () => {
  return (
    <S.HeroContainer>
      <S.HeroTitle>
        <S.HeroTitleText>
          청년 자취생을 위한
          <b>지역 기반 정보 & 커뮤니티</b>
        </S.HeroTitleText>
        <S.HeroDescription>
        내 동네 자취 꿀팁, 지원사업, 후기까지 한 번에!
        </S.HeroDescription>
      </S.HeroTitle>
      <S.HeroButton>
        <S.HeroButtonItem>
          <S.Link to="/provide">
            <span>정보를 둘러보고 싶어요</span>
            <Icon name="arrow-right" size="small" color="primary" />
          </S.Link>
        </S.HeroButtonItem>
        <S.HeroButtonItem>
          <S.Link to="/community">
            <span>이웃에게 물어보고 싶어요</span>
            <Icon name="arrow-right" size="small" color="primary" />
          </S.Link>
        </S.HeroButtonItem>
      </S.HeroButton>
    </S.HeroContainer>
  );
};

export default MainHero;