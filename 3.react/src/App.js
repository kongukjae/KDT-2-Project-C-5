import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    photo: "",
    id: "",
    email: "",
    username: "",
    password: "",
    passwordCheck: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">사진:</label>
          <input type="file" name="photo" id="photo" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="id">아이디:</label>
          <input type="text" name="id" id="id" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">이름:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="passwordCheck">비밀번호 확인:</label>
          <input
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            onChange={handleChange}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default App;
