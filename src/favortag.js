import React from "react";
import TagCheckBox from "../components/TagCheckbox.js"
const FavorTag = () => {

  return (
    <div>
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
            <td><TagCheckBox name="공포"></TagCheckBox></td>
            <td><TagCheckBox name="로맨스"></TagCheckBox></td>
            <td><TagCheckBox name="사랑"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="멜로"></TagCheckBox></td>
            <td><TagCheckBox name="호러"></TagCheckBox></td>
            <td><TagCheckBox name="수사"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="모순"></TagCheckBox></td>
            <td><TagCheckBox name="비극"></TagCheckBox></td>
            <td><TagCheckBox name="역사"></TagCheckBox></td>
          </tr>
          <tr>
            <td><TagCheckBox name="실화"></TagCheckBox></td>
            <td><TagCheckBox name="감동"></TagCheckBox></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/* <h4>회원님이 선택하신 태그의 정보를 알려드릴게요</h4> */}
      <button type="submit">지금은 건너뛸래요</button>
      <button type="submit">등록</button>
    </form>
    </div>
  )
}

export default FavorTag;