import React from "react";
import TagCheckBox from "./tagCheckbox.js"
export default function FavorTag() {

  return (
    <form id="favorTag">
      <h4>관심이 가는 태그를 선택해주세요!</h4>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>좋아하는 장르를 선택해보세요</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><TagCheckBox name="#시"></TagCheckBox></td>
            <td><TagCheckBox name="#소설"></TagCheckBox></td>
            <td><TagCheckBox name="#희곡"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="#시"></TagCheckBox></td>
            <td><TagCheckBox name="#소설"></TagCheckBox></td>
            <td><TagCheckBox name="#희곡"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="#시"></TagCheckBox></td>
            <td><TagCheckBox name="#소설"></TagCheckBox></td>
            <td><TagCheckBox name="#희곡"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="#시"></TagCheckBox></td>
            <td><TagCheckBox name="#소설"></TagCheckBox></td>
            <td><TagCheckBox name="#희곡"></TagCheckBox></td>
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
            <td><TagCheckBox name="#여행"></TagCheckBox></td>
            <td><TagCheckBox name="#운동"></TagCheckBox></td>
            <td><TagCheckBox name="#예술"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="#여행"></TagCheckBox></td>
            <td><TagCheckBox name="#운동"></TagCheckBox></td>
            <td><TagCheckBox name="#예술"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="#여행"></TagCheckBox></td>
            <td><TagCheckBox name="#운동"></TagCheckBox></td>
            <td><TagCheckBox name="#예술"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="#여행"></TagCheckBox></td>
            <td><TagCheckBox name="#운동"></TagCheckBox></td>
            <td><TagCheckBox name="#예술"></TagCheckBox></td>
          </tr>
        </tbody>
      </table>
      <h4>회원님이 선택하신 태그의 정보를 알려드릴게요</h4>
      <button>지금은 건너뛸래요</button>
      <button>등록</button>
    </form>
  )
}