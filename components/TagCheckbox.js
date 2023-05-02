import React from "react";

export default function TagCheckbox(props) {
  return(
    <label>
      <input type="checkbox"name={props.name} /> {props.name}
    </label>
  )
}