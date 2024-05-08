import { useState } from "react";

interface TextFormProps {
  showAlert: (message: string, type: string) => void;
  mode: string;
  heading: string;
}

function TextForm(props: TextFormProps) {
  const handleUpClick = () => {
    // console.log("UpperCase was triggered.");
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case!", 'success');
  };

  const handleLowClick = () => {
    // console.log("LowerCase was triggered.");
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case!", 'success');
  };

  function countWords(text: string) {
    if (text.length === 0) {
      return 0;
    }
    // Trim leading and trailing white spaces
    text = text.trim();

    // Split the text into an array of words
    const words = text.split(/\s+/);

    // Return the count of words
    return words.length;
  }
  const handleOnChange = (event: any) => {
    // console.log("OnChange was triggered");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{ color: (props.mode === 'dark' ? '#ffffff' : '#000000') }}>
        <h2>{props.heading}</h2>
        <div className="mb-3 mt-3">
          <textarea
            className="form-control mb-2"
            id="myBox"
            rows={8}
            value={text}
            placeholder="Enter your text here."
            onChange={handleOnChange}
            style={{
              backgroundColor: (props.mode === 'dark' ? '#232323' : '#ffffff'),
              color: (props.mode === 'dark' ? '#ffffff' : '#000000')
            }}
          ></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn green" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: (props.mode === 'dark' ? '#ffffff' : '#000000') }}>
        <h3>Your text summary.</h3>
        <p>
          {/* {text.split(" ").length} words, {text.length} characters */}
          {countWords(text)} words, {text.length} characters
        </p>
        <p>
          {" "}
          <strong> Reading time:</strong> {countWords(text) * 0.008} minutes
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Text to Preview ."} </p>
      </div>
    </>
  );
}

export default TextForm;
