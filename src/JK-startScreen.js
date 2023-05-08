// 시작화면 (로고) 컴포넌트이다.
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import signUp from './JK-signUp';

const logo = () => {

  const nav=useNavigate();
  // 일정시간(2초)후 로그인 페이지로 넘어가도록 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      nav('/login')
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <div>
    <div id='start-logo'>BOOK STAGRAM</div>
    </div>
}

export default logo;