import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomerTable from "./CustomerTable";
import CustomerMobile from "./CustomerMobile";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router";

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

export default function CustomerTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { push } = useHistory();

  const { id }: any = useParams();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Customers
        <div>
          <Button size="small" sx={{ textTransform: "none" }} color="secondary">
            Import
          </Button>
          <Button
            size="small"
            disableElevation
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Export
          </Button>
          <Button
            size="small"
            onClick={() => push(`/admin/${id}/customers/new`)}
            disableElevation
            variant="contained"
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Add
          </Button>
        </div>
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            sx={{ maxWidth: { lg: "100%", xs: 336 } }}
            indicatorColor="secondary"
            value={value}
            variant="scrollable"
            onChange={handleChange}
            scrollButtons
            aria-label="basic tabs example"
          >
            <Tab sx={{ textTransform: "none" }} label="All" {...a11yProps(0)} />
            <Tab
              sx={{ textTransform: "none" }}
              label="New"
              {...a11yProps(1)}
              color="secondary"
            />
            <Tab
              sx={{ textTransform: "none" }}
              label="Returning"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ textTransform: "none" }}
              label="Abandoned checkout"
              {...a11yProps(3)}
            />
            <Tab
              sx={{ textTransform: "none" }}
              label="Email subscribers"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <CustomerMobile />
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <CustomerTable />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <CustomerMobile />
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <CustomerTable />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <CustomerMobile />
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <CustomerTable />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <CustomerMobile />
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <CustomerTable />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <CustomerMobile />
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <CustomerTable />
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
}
