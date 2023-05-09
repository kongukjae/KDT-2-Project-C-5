import React from "react";

export default function TagCheckbox(props) {
  return(
    <label>
      <input type="checkbox"name="tag" value={props.name}/> {props.name}
    </label>
  )
}