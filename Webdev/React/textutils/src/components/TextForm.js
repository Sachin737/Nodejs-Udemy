import React from "react";
import { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = (props) =>{
    console.log("Upper case clicked!");
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () =>{
    console.log("Lower case clicked!");
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleTextToSpeechClick = () =>{
    let awaaj = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(awaaj);
  }

  const handleClearClick = () =>{
    setText('');
  }

  const handleOnChange = (event) =>{
    console.log("OnChange");
    setText(event.target.value)
  }

  let TextColour = 'text-black';
  if(props.mode==='dark'){
    TextColour='text-light';
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className={`container ${TextColour}`} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="mybox" value={text}  onChange={handleOnChange} rows="10"></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleTextToSpeechClick} >Convert to Audio</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear content</button>
      </div>

      <div className={`container ${TextColour} my-3`} >
          <h3>Your text Summary</h3>
          <p>{text.split(" ").length-(text.split(" ")[text.split(" ").length-1]==="")} words, {text.length - text.split(" ").length + 1} characters</p>
      
          <br />
          <h3>Preview</h3>
          <p>{text}</p>
      </div>
    </>
  );
}
