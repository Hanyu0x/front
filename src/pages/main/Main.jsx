import React from 'react';
import MainHero from './mainHero/MainHero';
import MainProvide from './mainProvide/MainProvide';
import MainCommunity from './mainComunity/MainCommunity';
import MainSafetyScore from './mainSafetyScore/MainSafetyScore';
import MainSelectLocation from './mainSelectLocation/MainSelectLocation';

const Main = () => {
  return (
    <div>
      {/* 메인 페이지 */}
      <MainHero />
      <MainProvide />
      <MainCommunity />
      <MainSafetyScore />
      <MainSelectLocation />

    </div>
  );
};

export default Main;