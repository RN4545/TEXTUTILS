import React, { useState } from "react";

export default function TextForm(props) {
  // for uppercase
  const handleupclick = () => {
    console.log("handleup clicked was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  //for lowercase
  const handleloclick = () => {
    console.log("handlelo clicked was clicked");
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleclear = () => {
    console.log("handleclear clicked was clicked");
    let newText = "";
    setText(newText);
  };
  const handlecap = () => {
    console.log("handlecap clicked was clicked");
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };

  const handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const handlecopy = () =>{
    console.log("yes the copy button is working");
    let newText= document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const handleextraspace = () =>{
    console.log("yea its working go ahead");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange} style={{backgroundColor: props.mode==='light'?'white':'grey'}}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>
          CONVERT TO LOWERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclear}>
          CLEAR TEXT
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecap}>
          CAP-1ST-LETTER
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>
          COPY-TEXT
        </button>
        <button className="btn btn-primary mx-1" onClick={handleextraspace}>
          REMOVE_EXTRASPACE
        </button>
       
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} take minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
