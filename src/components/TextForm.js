import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    // setText("You have clicked on handleUpclicked");
  };

  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    // alert("Copied");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#0d2a41" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}>
          Reset
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h3>Your Text Summary</h3>
        <p>
          <b>
            {" "}
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          Words and <b> {text.length}</b> Characters.
        </p>
        <p>
          You can read in{" "}
          <b>
            {" "}
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          </b>
          minutes.
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here..."}
        </p>
      </div>
    </>
  );
}
