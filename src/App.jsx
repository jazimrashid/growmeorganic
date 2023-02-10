import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Datalist from "./Components/Datalist/Datalist";
import { Route, Routes  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Form />} />

        <Route exact path="/Home" element={<Datalist />} />
      </Routes>
      
    </div>
  );
}

export default App;
