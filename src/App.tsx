import { useState } from "react";
import "./App.css";
import { Input } from "./NumberInput";
import { Combobox } from "./Combobox";
import { Popover } from "./Popover";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        gap: "3rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="App"
    >
      <Input></Input>
      <Combobox />
      <Popover />
    </div>
  );
}

export default App;
