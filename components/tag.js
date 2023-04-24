import React from "react";

export default function Tag(props) {
  return(
    <label>
      <input type="checkbox"name={props.name} /> {props.name}
    </label>
  )
}