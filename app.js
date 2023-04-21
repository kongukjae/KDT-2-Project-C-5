import React from "react";

function App(){

    return(
            <div>
            <header>
          <h1>
            <img src="https://imagescdn.gettyimagesbank.com/500/20/094/196/0/1218554318.jpg" alt="bookstar" />
          </h1>
        </header>
          <main>
    
          <div>Login</div>
    
            <form>
              <input type="text" name="userName" placeholder="Email" />
              <input type="password" name="userPassword" placeholder="Password" />
              <input type="submit" value="Login" />
    
              <div>
                <button onclick="window.location.href='링크주소'">
                  <img src="https://velog.velcdn.com/images/pagkusd/post/4642149d-8241-4629-b5f5-e102dae1bf86/image.png" alt="google"/>
                </button>
    
                <button onclick="window.location.href='링크주소'">
                  <img src="https://developer.apple.com/design/human-interface-guidelines/technologies/sign-in-with-apple/images/apple-id-sign-up-with_2x.png" alt="apple"/>
                </button>
                
                <button onclick="window.location.href='링크주소'">sign up</button>
                  <button>비번 ?</button>
              </div>
    
            </form>
    
    
    
            </main>
    
            <footer>
              <p>(주)쥬씨네</p>
            </footer>
          </div>
    )
}


export default App;
