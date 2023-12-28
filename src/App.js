import React from "react";
import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContainer from "./Components/main-container/MainContainer";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
