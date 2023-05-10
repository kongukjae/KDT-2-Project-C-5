import React from "react";
import BookStagramTopLogo from "./BookStagramTopLogo";
import HambergerMenu from "./HambergerMenu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// 계정설정 컴포넌트
import AccountSetting from "../src/AccountSetting";
// 알림설정 컴포넌트
import AlarmSetting from "./AlarmSetting";
// 관심친구 컴포넌트
import FollowerFollowing from "../src/FollowerFollowing";
// 차단목록 컴포넌트
import BlockedUser from "../src/BlockedUser";

const headerStyle = {
  display: "flex",
  justifyContent: "space-around",
};
// 임시 태그 설정 컴포넌트
const Page1 = () => <h1>태그설정</h1>;
// 임시 구매하기 컴포넌트
const Page2 = () => <h1>구매하기</h1>;
// 임시 로그아웃 컴포넌트
const Page3 = () => <h1>로그아웃</h1>;

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
    <div>
      <div style={headerStyle}>
        <div>📃</div>
        <BookStagramTopLogo />
        <HambergerMenu items={menuItems} />
      </div>

      <Routes>
        <Route path="/accountsetting" element={<AccountSetting />} />
        <Route path="/alarmsetting" element={<AlarmSetting />} />
        <Route path="/followerfollowing" element={<FollowerFollowing />} />
        <Route path="/tagsetting" element={<Page1 />} />
        <Route path="/blockedusers" element={<BlockedUser />} />
        <Route path="/purchase" element={<Page2 />} />
        <Route path="/logout" element={<Page3 />} />
      </Routes>

      {/* <div style={headerStyle}>
          <div>📃</div>
          <BookStagramTopLogo />
          <HambergerMenu items={menuItems} />
        </div> */}
    </div>
  );
};

export default TopMenu;
