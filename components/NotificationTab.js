import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainFeedContents from "./MainFeedContents";
import NoticePage from "./NoticePage";

const Notification = () => {
  return (
    <div>
      <Link to="/page">📃</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/page" element={<MainFeedContents />} />
        </Routes>
        <div>
          <Notification />
        </div>
      </Router>
    </div>
  );
};

export default App;
// const Notification = () => {
//   return (
//     <div>
//       <Link to="/NoticePage">📃</Link>
//     </div>
//   );
// };

// const App = () =>
// return(
//   <div>
//   <Router>
//         <Routes>
//           <Route path="/NoticePage" element={<NoticePage />} />

//         </Routes>
//   </div>
// );
// };

// export default App;

// import React from "react";
// import NoticePage from "./NoticePage";

// const NotificationTab = () => {
//   return (
//     <div>
//       <h2>Notifications</h2>
//       <ul>
//         <li>
//           <Link to="/noticePge" element={<NoticePage />}>
//             Notice
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NotificationTab;
