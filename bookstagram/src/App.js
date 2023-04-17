import React from "react";
import "./App.css";

// function App() {
//   const name = "Bookstagram";
//   return <div className="logo">{name}</div>;
// }

// export default App;

import MyComponet from "./Mycomponent";

const App = () => {
  return <MyComponet name={3}>리엑트</MyComponet>;
};
export default App;
