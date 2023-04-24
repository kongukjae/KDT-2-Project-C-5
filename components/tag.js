import React from "react";

export default function Tag(props) {
  props [tagName, setTagName] = useState(props.name)
  return(
    <label>
      <input type="checkbox"name={props.name} /> {props.name}
    </label>
  )
}