// import React from "react";
// import About from "./About";
// import Home from "./Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function Test() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Switch>
//     </Router>
//   );
// }
// export default Test;
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// 페이지 1 컴포넌트
const Page1 = () => <h1>Page 1</h1>;

// 페이지 2 컴포넌트
const Page2 = () => <h1>Page 2</h1>;

// Test 컴포넌트
const Tset = () => {
  return (
    <Router>
      <div>
        {/* 링크 */}
        <nav>
          <ul>
            <li>
              <Link to="/">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>

        {/* 페이지 */}
        <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Tset;
