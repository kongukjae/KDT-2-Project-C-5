// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import MainFeed from '../src/mainFeed';
// import StartScreen from '../src/startScreen';
// import Login from '../src/login';

// const Page1 = () => <div>Page 1</div>;
// const Page2 = () => <div>Page 2</div>;
// const Page3 = () => <div>Page 3</div>;
// const Page4 = () => <div>Page 4</div>;

// const NavBar = () => {
//   const navbarStyle = {
//     width: '390px',
//     height: '106px',
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     border: '1px solid black'
//   };

//   const linkStyle = {
//     color: 'black',
//     textDecoration: 'none',
//     marginRight: '10px'
//   };

//   return (
//     <div>
//       <BrowserRouter basename="/myapp">
//         <div style={navbarStyle}>
//           <Link to="/" style={linkStyle}>tap1</Link>
//           <Link to="/login" style={linkStyle}>tap2</Link>
//           <Link to="/page2" style={linkStyle}>tap3</Link>
//           <Link to="/page3" style={linkStyle}>tap4</Link>
//           <Link to="/page4" style={linkStyle}>tap5</Link>
//         </div>
//         <Routes>
//           <Route exact path="/" element={<StartScreen />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/mainfeed" element={<MainFeed />} />
//           <Route path="/page3" element={<Page3 />} />
//           <Route path="/page4" element={<Page4 />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default NavBar;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartScreen from '../src/startScreen';
import LoginPage from '../src/login';
import MainFeed from '../src/mainFeed';

const navBarStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  listStyleType: 'none',
};

const NavBar = () => {
  return (
    <nav>
      <ul style={navBarStyle}>
        <li>
          <Link to="/">StartScreen</Link>
        </li>
        <li>
          <Link to="/login">LoginPage</Link>
        </li>
        <li>
          <Link to="/mainfeed">MainFeed</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mainfeed" element={<MainFeed />} />
        </Routes>
        <div>
          <NavBar />
        </div>
      </Router>
    </div>
    
  );
};

export default App;