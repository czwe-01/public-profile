import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Achievements from "./achievements/Achievements";
import {
  FaArrowsAltH,
  FaCompressArrowsAlt,
  FaGulp,
  FaLongArrowAltUp,
} from "react-icons/fa";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goToTop = () => window.scrollTo(0, 0);

  return (
    <div className="main-content">
      <Box sx={{ width: "100%" }}>
        <button
          style={{
            padding: "1em",
            position: "fixed",
            bottom: "2em",
            right: "1em",
            zIndex: "10",
            backgroundColor: "#030303",
            color: "#fff",
          }}
          onClick={() => goToTop()}
        >
          <FaLongArrowAltUp />
          Top
        </button>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="inherit"
            aria-label="basic navigation between tabs"
          >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Portfolio" {...a11yProps(1)} />
            <Tab label="Achievements" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Portfolio />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Achievements />
        </TabPanel>
      </Box>
    </div>
  );
}
