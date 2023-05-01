npm에 대한 업데이트를 진행 후, npm start가 제대로 실행되는지 테스트.
에러가 발생하여 원인을 파악하던 중, webpack 번들링 작업때 ESM방식으로 작성된 것이 아닌 commonjs방식으로 작성된 코드부분을 읽을 때 생기는 에러를 확인. 이를 위해 다음과 같은 작업을 진행함.

1. babelrc에 있는 plugin의 내용을 임시 삭제함.

```
    "plugins": [
        "transform-es2015-modules-commonjs"
    ]
```

2. render.js의 작성법을 React 18이상 방식에 맞게 수정하며 추가 문제를 해결함.

```
import {createRoot} from "react-dom/client";
import React from "react";
//파일의 확장자가 없으면 인식을 못하기에 확장자를 붙임.
import LoginPage from "./loginPage.js";

//root를 선언하고 createRoot를 사용하여 html의 root element로 지정.
const root = createRoot(document.getElementById('root'))

//지정한 root element에 render를 실행.
[root.render(<LoginPage />);]
```

3. 연결된 loginPage.js에서도 import의 확장자문제를 해결함.

```
//컴포넌드들에 확장자를 추가함.
import React from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo.js';
import InputId from '../components/InputId.js';
import InputPwd from '../components/InputPwd.js';
import ButtonLogin from '../components/ButtonLogin.js';
import ButtonSignUpWithGoogle from '../components/ButtonSignUpWithGoogle.js';
import ButtonSignUpWithAppleAccount from '../components/ButtonSignUpWithAppleAccount.js';
import ButtonSignUp from '../components/ButtonSignUp.js';
import ForgotAccount from '../components/ForgotAccount.js';

const loginPage = () => {
  return (
    <div>
      <BookStagramTopLogo/>
      <div>
        <form>
          <InputId/>
          <p><b>password</b></p>
          <InputPwd/>
        </form>
      </div>
      <ButtonLogin/>
      
      <div></div>
      <div>
        <ButtonSignUpWithGoogle/>
        <ButtonSignUpWithAppleAccount/>
        <ButtonSignUp/>
        <ForgotAccount/>
      </div>
    </div>
  );
};

export default loginPage;
```
4. 이외 다른 /src js파일들의 import에도 동일하게 수정함.
main.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import StartPage from './startScreen.js';
import Login from './login.js';
import LoginPage from './loginPage.js';
```

5. npx webpack을 실행하여 webpack.config.js 설정에 따라 번들러 파일을 생성함.

이후 테스트를 진행하니 render.js를 읽을 수 없다는 문제를 확인,
번들러로 해당 render.js및 기타 파일들을 번들했기에 기본 html 템플릿에서 해당 스크립트부분을 삭제함.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```