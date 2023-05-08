import React, { useState } from "react";
import BookStagramTopLogo from "../components/BookStagramTopLogo";
import InputId from "../components/InputId";
import InputPwd from "../components/InputPwd";
import ButtonLogin from "../components/ButtonLogin";
import ButtonSignUpWithGoogle from "../components/ButtonSignUpWithGoogle";
import ButtonSignUpWithAppleAccount from "../components/ButtonSignUpWithAppleAccount";
import ButtonSignUp from "../components/ButtonSignUp";
import ForgotAccount from "../components/ForgotAccount";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./signUp";
const loginPage = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const handleLogin = (event) => {
    // 기본 제출 이벤트 방지
    event.preventDefault();
    const requestBody = { id, pwd };
    console.log(requestBody);
    // const form = event.target;
    // const formData = new FormData(form);
    // console.log(formData);
    fetch("/login", {
      // HTTP 요청 메서드 지정
      method: "POST",
      // HTTP 요청 헤더 지정
      // 요청 본문에 클라이언트가 서버에 JSON 형태의 데이터를 담아 보낼 것을 명시
      headers: { "Content-Type": "application/json" },
      // HTTP 요청 본문에 담을 데이터를 지정
      // id, pwd를 JSON 형태의 문자열로 변환하여 본문에 보냄
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        // 서버 응답 데이터를 JSON 형태로 파싱하여 변환
        return response.json();
      })
      .then((data) => {
        // 로그인 성공 처리
        console.log("login succeeded", data);
      })
      .catch((error) => {
        console.error(error);
        // 로그인 실패 처리
      });
  };
  return (
    <div>
      <BookStagramTopLogo />
      <div>
        <form onSubmit={handleLogin}>
          <InputId value={id} onChange={(e) => setId(e.target.value)} />
          <p>
            <b>password</b>
          </p>
          <InputPwd value={pwd} onChange={(e) => setPwd(e.target.value)} />
          <Link to="/mainFeed">
            <ButtonLogin />
          </Link>
        </form>
      </div>
      <div></div>
      <div>
        <ButtonSignUpWithGoogle />
        <ButtonSignUpWithAppleAccount />
        <Link to="/signUp">
          <ButtonSignUp />
        </Link>
        <ForgotAccount />
      </div>
    </div>
  );
};
export default loginPage;
