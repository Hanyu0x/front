import React from 'react';
import TabMenu from '../component/TabMenu.jsx';

const MyAreaTabs = ({ activeTab, onChange }) => {
  const tabs = [
    { id: 'favorite', label: '즐겨찾기 지역' },
    { id: 'recent', label: '최근 본 지역' },
  ];

  return <TabMenu tabs={tabs} activeId={activeTab} onChange={onChange} />;
};

export default MyAreaTabs;