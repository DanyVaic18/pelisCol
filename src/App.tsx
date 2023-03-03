import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [first, setfirst] = useState<string>("");

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
