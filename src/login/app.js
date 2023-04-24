import React from "react";
import './App.css';


function App() {
  return(
        <div>
        <header>
      <h1>
        logo
      </h1>
    </header>
      <main>

      <p>Login</p>

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

        <footer>
        </footer>
      </div>
      ) 
  }


export default App;
