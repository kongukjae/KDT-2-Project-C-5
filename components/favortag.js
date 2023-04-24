import React from "react";

export default function FavorTag() {
  
    return(
      <div>
      <h4>관심이 가는 태그를 선택해주세요!</h4>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>좋아하는 장르를 선택해보세요</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#시</td>
            <td>#소설</td>
            <td>#희곡</td>
          </tr>
          <tr>
            <td>#시</td>
            <td>#소설</td>
            <td>#희곡</td>
          </tr>
          <tr>
            <td>#시</td>
            <td>#소설</td>
            <td>#희곡</td>
          </tr>
          <tr>
            <td>#시</td>
            <td>#소설</td>
            <td>#희곡</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>회원님의 관심사는 무엇인가요?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#여행</td>
            <td>#운동</td>
            <td>#예술</td>
          </tr>
          <tr>
            <td>#여행</td>
            <td>#운동</td>
            <td>#예술</td>
          </tr>
          <tr>
            <td>#여행</td>
            <td>#운동</td>
            <td>#예술</td>
          </tr>
          <tr>
            <td>#여행</td>
            <td>#운동</td>
            <td>#예술</td>
          </tr>
        </tbody>
      </table>
      <h4>회원님이 선택하신 태그의 정보를 알려드릴게요</h4>
      <button>지금은 건너뛸래요</button>
      <button>등록</button>
    </div>
    )
}