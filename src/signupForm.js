function signupFormData(){
  return `<h1>북스타그램</h1>
  <form method="GET" action="/login">
    <label>
      ID:
      <input type="text" name="id" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <button type="submit">로그인</button>
  </form>`
}
function signupForm(){
  const root = window.document.getElementById('root');
  console.log(root);
  root.innerHTML = signupFormData();
}
export default signupForm;
signupForm();
