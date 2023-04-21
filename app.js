import React from "react";

export default function App(){
    //form이 submit되는 이벤트를 캐치, 이때 해당 이벤트를 event 매개변수로 받고 진행함.
    function handleSubmit(event) {
        //새창을 여는 기본 설정을 방지하는 구문.
        event.preventDefault();

        //받은 이벤트의 타겟, submit된 데이터(id, password)를 form으로 저장하는 구문
        const form = event.target;
        const formData = new FormData(form);
        fetch("/login", {method: form.method, body: formData})
        console.log(form.method);
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