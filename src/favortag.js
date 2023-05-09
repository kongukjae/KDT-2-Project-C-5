import React, { useState } from "react";
import TagCheckBox from "../components/TagCheckbox.js"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const FavorTag = () => {
  const {state} = useLocation();
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
    // fetch('/signUp/tags', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: jsonTags
    // }).then(response => {
    //   if (response.ok) {
    //     // handle success
    //   } else {
    //     // handle error
    //   }
    // }).catch(error => {
    //   // handle network error
    // });
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