import React from 'react';
import styled from 'styled-components';
import RegionCard from './RegionCard';

const RecentAreas = () => {
  const recentRegions = [
    {
      id: 1,
      name: '서울특별시 관악구 신림동',
      lastChecked: '오늘',
      linkText: '다시보기',
    },
  ];

  return (
    <CardList>
      {recentRegions.map((item) => (
        <RegionCard
          key={item.id}
          name={item.name}
          lastChecked={item.lastChecked}
          linkText={item.linkText}
          onLinkClick={() => {}}
        />
      ))}
    </CardList>
  );
};

const CardList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export default RecentAreas;