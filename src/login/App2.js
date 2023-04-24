import React from "react";
import './App.css';

function Header() {
  return (
    <header>
      <h1>
        logo
      </h1>
      <p>Login</p>
    </header>
  );
}

function Main () {
  return (
    <main>
      <form>
        <div>
          <input type="text" name="userName" placeholder="Email" />
          <input type="password" name="userPassword" placeholder="Password" />
          <input type="submit" value="Login" />
          <button onclick="window.location.href='링크주소'">
            google
          </button>
          <button onclick="window.location.href='링크주소'">
            apple
          </button>
          <button onclick="window.location.href='링크주소'">sign up</button>
            <button>비번 ?</button>
        </div>
      </form>
    </main>
  )
}

function Footer () {
  return (
    <footer>

    </footer>
  )
}
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
