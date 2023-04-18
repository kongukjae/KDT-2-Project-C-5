export default function signUpForm() {
  return `<form id="signup-form">
      <label for="uid">User ID:</label>
      <input type="text" id="uid" name="uid" required />

      <label for="pwd">Password:</label>
      <input type="password" id="pwd" name="pwd" required />

      <label for="uEmail">Email:</label>
      <input type="email" id="uEmail" name="uEmail" required />

      <label for="uName">Name:</label>
      <input type="text" id="uName" name="uName" required />

      <button type="submit">Submit</button>
    </form>`
}