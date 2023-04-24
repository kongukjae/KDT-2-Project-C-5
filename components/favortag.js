import React from "react";

export default function FavorTag() {
  const tempStyle = "border: 1px, solid, black";

    return(
        <div>
          <h1>관심이 가는 태그를 선택해주세요!</h1>
          <table>
            <thead>
              <th style={tempStyle}>좋아하는 장르를 선택해보세요</th>
            </thead>
            <tbody>
              <tr>
                <td style={tempStyle}>#시</td>
                <td style={tempStyle}>#소설</td>
                <td style={tempStyle}>#희곡</td>
              </tr>
              <tr>
                <td style={tempStyle}>#시</td>
                <td style={tempStyle}>#소설</td>
                <td style={tempStyle}>#희곡</td>
              </tr>
              <tr>
                <td style={tempStyle}>#시</td>
                <td style={tempStyle}>#소설</td>
                <td style={tempStyle}>#희곡</td>
              </tr>
              <tr>
                <td style={tempStyle}>#시</td>
                <td style={tempStyle}>#소설</td>
                <td style={tempStyle}>#희곡</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <th>회원님의 관심사는 무엇인가요?</th>
            </thead>
            <tbody>
              <tr>
                <td style={tempStyle}>#여행</td>
                <td style={tempStyle}>#운동</td>
                <td style={tempStyle}>#예술</td>
              </tr>
              <tr>
                <td style={tempStyle}>#여행</td>
                <td style={tempStyle}>#운동</td>
                <td style={tempStyle}>#예술</td>
              </tr>
              <tr>
                <td style={tempStyle}>#여행</td>
                <td style={tempStyle}>#운동</td>
                <td style={tempStyle}>#예술</td>
              </tr>
              <tr>
                <td style={tempStyle}>#여행</td>
                <td style={tempStyle}>#운동</td>
                <td style={tempStyle}>#예술</td>
              </tr>
            </tbody>
          </table>
          <h3 style={tempStyle}>회원님이 선택하신 태그의 정보를 알려드릴게요</h3>
          <button>지금은 건너뛸래요</button>
          <button>등록</button>
        </div>
    )
}