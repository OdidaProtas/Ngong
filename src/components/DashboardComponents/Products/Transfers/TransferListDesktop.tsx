import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TransferDesktopTable from "./TransferDesktopTable";
import TransferListMobile from "./TransferListMobile";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TransferListDesktop() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          indicatorColor="secondary"
          value={value}
          variant="scrollable"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ textTransform: "none" }} label="All" {...a11yProps(0)} />
          <Tab
            sx={{ textTransform: "none" }}
            label="Pending"
            {...a11yProps(1)}
            color="secondary"
          />
          <Tab
            sx={{ textTransform: "none" }}
            label="Partial"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            label="Completed"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <TransferDesktopTable />
        </Box>
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <TransferListMobile />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <TransferDesktopTable />
        </Box>
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <TransferListMobile />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <TransferDesktopTable />
        </Box>
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <TransferListMobile />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <TransferDesktopTable />
        </Box>
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <TransferListMobile />
        </Box>
      </TabPanel>
    </Box>
  );
}
