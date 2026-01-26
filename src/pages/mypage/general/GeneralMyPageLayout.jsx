import React from "react";
import { Outlet } from "react-router-dom";
import MyPageHeader from "./component/MyPageHeader.jsx";
import MyPageSidebar from "./component/MyPageSidebar.jsx";

const GeneralMyPageLayout = () => {
  return (
    <div style={layoutStyles.wrapper}>
      <MyPageHeader />
      
      <div style={layoutStyles.bottomContainer}>
        <MyPageSidebar />
        <main style={layoutStyles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const layoutStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
  },
  bottomContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'stretch', 
    width: '100%',
  },
  mainContent: {
    flex: 1,
    padding: '40px',
    backgroundColor: '#FFFFFF',
  },
};

export default GeneralMyPageLayout;