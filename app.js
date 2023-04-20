import React from "react";

export default function App(){

    return(
        <div>
            <header>
            <h1>북스타그램</h1>
            </header>
        <main>
    
            <h2>Login</h2>
    
            <form>
            <input type="text" name="userName" placeholder="Email" />
            <input type="password" name="userPassword" placeholder="Password" />
        
            <input type="submit" value="Login" />
            </form>
        </main>
        <footer>
            
        </footer>
      </div>
    )
}
