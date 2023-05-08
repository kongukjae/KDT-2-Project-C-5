import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BookStagramTopLogo from "../components/BookStagramTopLogo-JE";
import HambergerMenu from "../components/HambergerMenu-JE";
import NotificationTab from "../components/NotificationTab-JE";
import NotificationList from "../components/NotificationList-JE";

// 계정설정 컴포넌트
import AccountSetting from "./AccountSetting";
// 알림설정 컴포넌트
import AlarmSetting from "../components/AlarmSetting";
// 관심친구 컴포넌트
import FollowerFollowing from "./FollowerFollowing";
// 차단목록 컴포넌트
import BlockedUser from "./BlockedUser";

const headerStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const TopMenu = () => {
  const menuItems = [
    { label: "계정설정", path: "/accountsetting" },
    { label: "알림설정", path: "/alarmsetting" },
    { label: "관심친구", path: "/followerfollowing" },
    { label: "태그설정", path: "/tagsetting" },
    { label: "차단목록", path: "/blockedusers" },
    { label: "구매하기", path: "/purchase" },
    { label: "로그아웃", path: "/logout" },
  ];

  return (
    <Router>
      <div>
        <div style={headerStyle}>
          <Link to="/notificationlist">
            <NotificationTab />
          </Link>
          <BookStagramTopLogo />
          <HambergerMenu items={menuItems} />
        </div>
        <Routes>
          <Route path="/accountsetting" element={<AccountSetting />} />
          <Route path="/alarmsetting" element={<AlarmSetting />} />
          <Route path="/followerfollowing" element={<FollowerFollowing />} />
          <Route path="/tagsetting" element={<h1>태그설정</h1>} />
          <Route path="/blockedusers" element={<BlockedUser />} />
          <Route path="/purchase" element={<h1>구매하기</h1>} />
          <Route path="/logout" element={<h1>로그아웃</h1>} />
          <Route path="/notificationlist" element={<NotificationList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default TopMenu;
