import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" phone="About Us" /> */}
      {/* <Navbar /> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert="This is your Application!!!" />
      <TextForm heading="Enter the text to analyze below" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
