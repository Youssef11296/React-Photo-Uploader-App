import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./Form.css";

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  // Valid Types
  const types = ["image/jpeg", "image/png"];

  // Functions
  const handleSubmit = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please, enter a valid photo type (image/jpeg, image/png)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={handleSubmit} />
        <span>+</span>
      </label>
      <div className="form__output">
        {file && <div className="form__fileName">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        {error && <div className="form__error">{error}</div>}
      </div>
    </form>
  );
};

export default Form;
