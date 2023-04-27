import React from "react";
import BookStagramTopLogo from "../components/BookStagramTopLogo";
import HambergerMenu from "../components/HambergerMenu";

const TopMenu = () => {
  const menuItems = [
    { label: "계정설정", onClick: () => alert("메뉴1 클릭됨") },
    { label: "알림설정", onClick: () => alert("메뉴2 클릭됨") },
    { label: "관심친구", onClick: () => alert("메뉴3 클릭됨") },
    { label: "태그설정", onClick: () => alert("메뉴1 클릭됨") },
    { label: "차단목록", onClick: () => alert("메뉴1 클릭됨") },
    { label: "구매하기", onClick: () => alert("메뉴1 클릭됨") },
    { label: "로그아웃", onClick: () => alert("메뉴1 클릭됨") },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div>📃</div>
      <BookStagramTopLogo />
      <HambergerMenu items={menuItems} />
    </div>
  );
};

export default TopMenu;
