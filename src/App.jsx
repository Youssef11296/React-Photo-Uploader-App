import React, { useState } from "react";
import "./App.css";
import Title from "./comps/Title";
import Form from "./comps/Form";
import Modal from "./comps/Modal";
import Grid from "./comps/Grid";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="app">
      <Title />
      <Form />
      <Grid setSelected={setSelected} />
      {selected && <Modal selected={selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
