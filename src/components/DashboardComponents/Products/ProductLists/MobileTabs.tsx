import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MobileList from "./MobileList";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MobileTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", mt: 1, width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          sx={{ textTransform: "none", fontSize: "9px" }}
          label="All"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ textTransform: "none", fontSize: "9px" }}
          label="Active"
          {...a11yProps(1)}
        />
        <Tab
          sx={{ textTransform: "none", fontSize: "9px" }}
          label="Drafts"
          {...a11yProps(2)}
        />
        <Tab
          sx={{ textTransform: "none", fontSize: "9px" }}
          label="Archive"
          {...a11yProps(3)}
        />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MobileList context="all"/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MobileList context="active" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MobileList context="draft" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <MobileList context="archived" />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
