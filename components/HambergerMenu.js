import React, { useState } from "react";

// 메뉴 아이템 컴포넌트
function MenuItem(props) {
  return <li onClick={props.onClick}>{props.label}</li>;
}

// 메뉴 컴포넌트
// 전달받은 props.item배열을 map함수를 사용해서 각각 메뉴와 아이템을 생성한다.
// 배열의 각 아이템마다 MenuItem컴포넌트를 생성하고, key와 label,onClick함수를 props로 전달한다.
// porps.items 배열에 있는 각각의 아이템은 메뉴 아이템으로 생성되고,
// 클릭 시 onClick함수가 실행된다.
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
// useState 훅을 이용하여 isOpen 이라는 상태값을 관리한다.
// 드롭다운 메뉴의 열림/닫힘 상태를 결정한다.
function HambergerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  //toggleMenu() 함수는 버튼을 클릭하면 호출되고, isOpen값이 반전된다.
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
