import React from "react";

export default function App(){
    function handleSubmit(event) {
        //기본 공백이 입력되는걸 방지하기 위한 구문.
        event.preventDefault();

        //받은 이벤트의 타겟, submit된 데이터(id, password)를 form으로 저장하는 구문
        const form = event.target;
        fetch()
    }

    return(
        <div>
            <h1>북스타그램</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="text" name="id" placeholder="ID를 입력하세요" />
                </label>
                <label>
                Password:
                    <input type="password" name="password" placeholder="패스워드를 입력하세요" />
                </label>
            <button type="submit">로그인</button>
            </form>
        </div>
    )
}