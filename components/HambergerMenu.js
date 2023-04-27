import React, { useState } from "react";

// 메뉴 아이템 컴포넌트
function MenuItem(props) {
  return <li onClick={props.onClick}>{props.label}</li>;
}

// 메뉴 컴포넌트
function Menu(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <MenuItem key={item.label} label={item.label} onClick={item.onClick} />
      ))}
    </ul>
  );
}

// 드롭다운 메뉴바 컴포넌트
function HambergerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleMenu}>🍔</button>
      {isOpen && <Menu items={props.items} />}
    </div>
  );
}

export default HambergerMenu;
