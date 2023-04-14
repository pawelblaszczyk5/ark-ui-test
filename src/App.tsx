import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from "./NumberInput";
import { Combobox } from "./Combobox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", gap: "3rem" }} className="App">
      <Input></Input>
      <Combobox />
    </div>
  );
}

export default App;
