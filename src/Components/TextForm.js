import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(prop) {
  const [text, setText] = useState("Enter text here ...");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnFocus = (e) => {
    if (text === "Enter text here ...") {
      setText("");
    }
  };

  const handleClearClick = (e) => {
    setText("");
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      //alert('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCapClick  = (e) => {
    let newText = text.replace(/\b\w/g, l => l.toUpperCase());
    setText(newText);
  };

  let minutesRead = (text) => {
    const words = (text.trim().split(/\s+/).length - 1) * 0.008;
    if (words === 0) {
      return 0;
    }
    if (words < 1) {
      return "Less than 1";
    }
    return words;
  };

  return (
    <>
      <div className="container">
        <h1>{prop.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here..."
            value={text}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-dark mx-1"
          onClick={handleUpClick}
        >
          UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-dark mx-1"
          onClick={handleDownClick}
        >
          lowercase
        </button>
        <button
          type="button"
          className="btn btn-dark mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-dark mx-1"
          onClick={handleCapClick}
        >
          Capitalize
        </button>
        <button
          type="button"
          className="btn btn-dark mx-1"
          onClick={handleCopyClick}
        >
          Copy
        </button>
        <button
          type="button"
          className="btn btn-dark mx-1"
          onClick={speak}
        >
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
        <p>
          {text.split(" ").length - 1} words, {text.length} characters
        </p>
        {/* <p>{(text.trim().split(/\s+/).length-1) * 0.008} minutes read</p> */}
        <p>{minutesRead(text)} minute read</p>

        <h3>Preview:</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propTypes = { heading: PropTypes.string };

TextForm.defaultProps = { heading: "Enter heading for this text field..." };
