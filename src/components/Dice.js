import React from "react";

export default function Dice(props) {
  // console.log(props)
  return (
    <div className="dice">
      <h2>{props.value}</h2>
    </div>
  );
}
