import React from "react";

export default function App(){

    return(
        <div>
            <h1>북스타그램</h1>
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
            </form>
        </div>
    )
}