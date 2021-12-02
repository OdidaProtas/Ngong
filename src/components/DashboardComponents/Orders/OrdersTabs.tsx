import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmptyOrders from "./EmptyOrders";
import EmptyDrafts from "./Tabs/EmptyDrafts";
import AbandonedCheckouts from "./Tabs/AbandonedCheckouts";
import DraftsTable from "./Drafts/DraftsTable";

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

export default function OrdersTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="scrollable"
          sx={{ maxWidth: { lg: "100%", xs: 336 } }}
          scrollButtons
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ textTransform: "none" }}
            color="secondary"
            label="All"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            color="secondary"
            label="Opended and invoice sent"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            color="secondary"
            label="Open"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            color="secondary"
            label="Invoice sent"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            color="secondary"
            label="Completed"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <EmptyOrders /> */}
        <DraftsTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DraftsTable />
        {/* <EmptyDrafts /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DraftsTable />
        {/* <AbandonedCheckouts /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DraftsTable />
        {/* <AbandonedCheckouts /> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DraftsTable />
        {/* <AbandonedCheckouts /> */}
      </TabPanel>
    </Box>
  );
}
