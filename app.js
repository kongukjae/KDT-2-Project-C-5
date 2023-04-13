// // app.js
// function App() {
//   const [count, setCount] = React.useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>{count}</p>
//       <button onClick={handleIncrement}>+</button>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
