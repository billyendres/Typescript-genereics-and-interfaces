import React from "react";
import TextField from "./TextField";

const App: React.FC = () => {
  return (
    <div>
      <h1>Typescript</h1>
      <TextField
        text="text field"
        person={{ firstName: "Billy", lastName: "Endres" }}
        // handleChange={e => {
        //   e.preventDefault;
        // }}
      />
    </div>
  );
};

export default App;
