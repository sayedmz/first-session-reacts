import React, { useState } from "react";

export const CoursState = () => {
  const [Moh, setMoh] = useState("mohamad");
  function ahmad() {
    setMoh("ahmad");
  }
  const [value, setValue] = useState("Yes");
  function changeValue() {
    setValue((prev) => (prev === "Yes" ? "No" : "Yes"));
  }
  const [value1, setValue1] = useState(true);
  function changeValue1() {
    setValue1((prev) => !prev);
  }
  const [value2, setValue2] = useState("red");
  function changeValue2() {
    setValue2((prev) => !prev);
  }
  return (
    <>
      <div style={{ fontSize: "60px", textAlign: "center" }}>
        {Moh}
        <br />
        <button onClick={ahmad}>click to change value</button>
      </div>

      <div style={{ fontSize: "60px", textAlign: "center" }}>
        {value}
        <br />
        <button onClick={changeValue}>click to change value</button>
      </div>

      <div style={{ fontSize: "60px", textAlign: "center" }}>
        {value1 ? "good" : "no good"}
        <br />
        <button onClick={changeValue1}>click to change value</button>
      </div>
      <div
        style={{
          fontSize: "60px",
          textAlign: "center",
          color: value2 ? "red" : "gold",
        }}
      >
        mohamad
        <br />
        <button onClick={changeValue2}>click to change style</button>
      </div>
    </>
  );
};
