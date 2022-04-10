import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("START");
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShoFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  useEffect(() => {
    console.log("userEffect!!");
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>REACT TUTORIAL</h1>
      <ColorfulMessage color="blue">TODO</ColorfulMessage>
      <ColorfulMessage color="pink">TODO LADY</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShoFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};

export default App;
