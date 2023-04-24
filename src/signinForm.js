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
  </form>`
}
function signInForm(){
  const root = window.document.getElementById('root');
  console.log(root);
  root.innerHTML = signInFormData();
}
signInForm();
