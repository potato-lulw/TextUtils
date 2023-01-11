import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(prop) {
  const [text, setText] = useState("Enter text here ...");

  const handleUpClick = ()  =>{
    console.log("Uppercase was clicked " + text);

    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (e)  =>{
    setText(e.target.value);
  }

  const handleOnFocus = (e) => {
    if(text === "Enter text here ...") {
      setText("")
    }
  }
  
  return (
    <div>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
            <textarea 
              className="form-control" 
              placeholder = "Enter text here..." 
              value={text} 
              onChange = {handleOnChange} 
              onFocus={handleOnFocus}
              id="myBox" 
              rows="10"
            >
            </textarea>
        </div>
        <button type="button" className="btn btn-dark" onClick={handleUpClick}>UPPERCASE</button>
    </div>
  )
}
TextForm.propTypes = {heading: PropTypes.string};

TextForm.defaultProps = {heading : "Enter heading for this text field..."};