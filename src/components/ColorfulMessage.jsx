import React from "react";
import ReactDom from "react-dom";

const ColorfulMessage = (props) => {
  console.log(props);
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
export default ColorfulMessage;
