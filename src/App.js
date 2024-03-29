import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContainer from "./Components/main-container/MainContainer";
import { toggleMode } from "./redux/appSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, useSelector } from "react-redux";

function App({ toggleMode }) {
  const data = useSelector((state) => state.appSlice.data);
  const darkMode = useSelector((state) => state.appSlice.darkMode);

  useEffect(() => {
    if (!darkMode) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else document.querySelector("body").setAttribute("data-theme", "dark");
  }, [darkMode]);

  return (
    <div className="main">
      <Sidebar toggle={toggleMode} data={data} />
      <MainContainer data={data} />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleMode,
    },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
