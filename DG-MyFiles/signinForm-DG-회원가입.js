function signInFormData(){
  return `<h1>북스타그램</h1>
  <form>
    <label>
      ID:
      <input type="text" name="id" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <button type="submit">로그인</button>
  </form>
  <form method="POST" action="/signin">
    <label>
      ID:
      <input type="text" name="id" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <label>
      Email:
      <input type="text" name="uEmail" />
    </label>
    <label>
      유저 닉네임:
      <input type="text" name="uName" />
    </label>
    <button type="submit">회원가입</button>
  </form>`
}
function signInForm(){
  const root = window.document.getElementById('root');
  console.log(root);
  root.innerHTML = signInFormData();
}
signInForm();
