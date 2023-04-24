// import React from "react";

// function InputBox(props) {
//   return (
//     <div>
//       <input
//         type="text"
//         value={props.inputValue}
//         onChange={props.handleInputChange}
//       />
//       <button onClick={props.handleButtonClick}>작성</button>
//     </div>
//   );
// }

// export default InputBox;
import React from "react";

function InputBox(props) {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default InputBox;
