import React from "react";
import BookStagramTopLogo from "../components/BookStagramTopLogo";
import HambergerMenu from "../components/HambergerMenu";

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-around'
}

const TopMenu = () => {
  const menuItems = [
    { label: "계정설정", onClick: () => alert("페이지전환") },
    { label: "알림설정", onClick: () => alert("페이지전환") },
    { label: "관심친구", onClick: () => alert("페이지전환") },
    { label: "태그설정", onClick: () => alert("페이지전환") },
    { label: "차단목록", onClick: () => alert("페이지전환") },
    { label: "구매하기", onClick: () => alert("페이지전환") },
    { label: "로그아웃", onClick: () => alert("페이지전환") },
  ];

  return (
    <div style={headerStyle}>
      <div>📃</div>
      <BookStagramTopLogo />
      <HambergerMenu items={menuItems} />
    </div>
  );
};

export default TopMenu;
