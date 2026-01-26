import React, { useState } from 'react';
import PageHeader from '../component/PageHeader.jsx';
import TabMenu from '../component/TabMenu.jsx';
import MyPosts from './MyPosts';
import MyComments from './MyComments';
import CommentsOnMyPosts from './CommentsOnMyPosts';
import BookmarkedPosts from './BookmarkedPosts';
import LikedPosts from './LikedPosts';

const MyActivity = () => {
  const tabs = [
    { id: 'posts', label: '내 글' },
    { id: 'comments', label: '내 댓글' },
    { id: 'postComments', label: '내 글의 댓글' },
    { id: 'scraps', label: '스크랩한 글' },
    { id: 'likes', label: '좋아요한 글' },
  ];

  const [activeTab, setActiveTab] = useState('posts');

  const renderTab = () => {
    switch (activeTab) {
      case 'comments':
        return <MyComments />;
      case 'postComments':
        return <CommentsOnMyPosts />;
      case 'scraps':
        return <BookmarkedPosts />;
      case 'likes':
        return <LikedPosts />;
      case 'posts':
      default:
        return <MyPosts />;
    }
  };

  return (
    <div style={styles.page}>
      <PageHeader title="내 활동" description="내 활동 내역을 확인하세요" />
      <TabMenu tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {renderTab()}
    </div>
  );
};

const styles = {
  page: {
    padding: '28px 32px 40px',
  },
};

export default MyActivity;