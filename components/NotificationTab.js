// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
import NoticePage from "./NoticePage";
// import TopMenu from "../src/TopMenu";

// function NotificationTab() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<TopMenu />} />
//         <Route path="/NoticePage" element={<NoticePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default NotificationTab;

// import { useHistory } from "react-router-dom";
// import React from "react";

// function NotificationTab() {
//   const history = useHistory();

//   const handleClick = () => {
//     history.push("/NoticePage");
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>알림</button>
//     </div>
//   );
// }

// export default NotificationTab;
<<<<<<< HEAD
function NotificationTab() {
=======
function Notification() {
>>>>>>> origin/issue18-2
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopMenu />} />
        <Route path="/NoticePage" element={<NoticePage />} />
      </Routes>
    </Router>
  );
}
<<<<<<< HEAD
export default NotificationTab;
=======
export default Notification;
>>>>>>> origin/issue18-2
