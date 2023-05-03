import React from 'react';
import { useHistory } from 'react-router-dom';

const logo = () => {

  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/signUp');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <div>
    <div id='start-logo'>BOOK STAGRAM</div>
    </div>
}

export default logo;