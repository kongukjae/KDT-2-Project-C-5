import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "../components/NavBar";
import "./index.css";


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Logo/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/accountSetting" element={<AccountSetting/>} />
        <Route path="/lockedUser" element={<BlockedUser/>} />
        <Route path="/mainFeed" element={<NavBar/>} />
        <Route path="/followerSetting" element={<FollowerFollowing/>}/>
        <Route path="/review" element={<ReviewPage/>}/>

      </Routes>
    
    </Router>   

  );
};
createRoot(document.getElementById("root")).render(<App />);
