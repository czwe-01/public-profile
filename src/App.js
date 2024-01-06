import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContainer from "./Components/main-container/MainContainer";
import Particle from "./Components/particle/Particle";

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
  }, [mode]);

  return (
    <div className="main">
      <Sidebar toggle={toggle} />
      <MainContainer />
      <Particle left={10} top={700} height={"10px"} width={"2px"} />
    </div>
  );
}

export default App;
