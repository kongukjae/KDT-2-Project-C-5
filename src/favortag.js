import React, { useState } from "react";
import TagCheckBox from "../components/TagCheckbox.js"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
const FavorTag = () => {
  // signUp에서 useNavigate로 보낼 때 같이 보낸 객체를 그대로 가져오는 구문.
  // 여기서 주의해야 할 것은 보내는 객체의 키값은 동일해야 한다는 것이다. 만일 객체의 키를 state로 했을 경우, 받는 Location도 state로 해야한다. 그렇지 않았을 경우 키값이 일치하지 않아 에러가 난다.
  const {state} = useLocation();
  const navigate = useNavigate();
  //state를 전송용 객체 signUpForm으로 변환하는 구문.
  const signUpForm = state;
  function addFavorTag(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    signUpForm.tag = [];
    for (let [name, value] of formData.entries()) {
      if (name.startsWith('tag')) {
        signUpForm.tag.push(value);
      }
    }
    const finalForm = JSON.stringify(signUpForm);
    console.log(finalForm);
    fetch('/signUp/tags', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonTags
    }).then(response => {
      if (response.ok) {
        // handle success
        navigate("/mainFeed");
      } else {
        // handle error
      }
    }).catch(error => {
      // handle network error
    });
  }

  return (
    <div>
      <form id="favorTag" method="POST" onSubmit={addFavorTag}>
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
        <Link to="/mainFeed">
          <button>지금은 건너뛸래요</button>
        </Link>
          <button type="submit">등록</button>
        
      </form>
    </div>
  )
}

export default FavorTag;