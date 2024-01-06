import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContainer from "./Components/main-container/MainContainer";
import ParticleBackground from "./Components/ParticleBackground";
import ToggleButton from "./Components/toggle-button/ToggleButton";

function App() {
  const [mode, setMode] = useState(null);

  function toggle() {
    if (mode !== "dark") {
      setMode("dark");
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      setMode("light");
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  }

  useEffect(() => {
    if (mode === null) {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  }, []);

  return (
    <div className="main">
      <Sidebar toggle={toggle} />
      <MainContainer />
    </div>
  );
}

export default App;
