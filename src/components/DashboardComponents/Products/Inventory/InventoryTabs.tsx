import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InventoryTable from "./InventoryTable";
import ProductHeader from "../ProductLists/Header/ProductHeader";
import { useHistory, useParams } from "react-router";
import Button from "@mui/material/Button";
import InventoryMobile from "./InventoryMobile";

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

export default function InventoryTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const { id }: any = useParams();
  const { push } = useHistory();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box>
      <Box sx={{ pb: 1 }}>
        <ProductHeader>
          <Button
            color="secondary"
            size="small"
            variant="contained"
            sx={{ textTransform: "none" }}
            disableElevation
            onClick={() => push(`/admin/${id}/products`)}
          >
            View Products
          </Button>
        </ProductHeader>
      </Box>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab
            sx={{ textTransform: "none", fontSize: "9px" }}
            label="All"
            {...a11yProps(0)}
          />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Box sx={{ display: { lg: "block", xs: "none", md: "block" } }}>
              <InventoryTable />
            </Box>
            <Box sx={{ display: { lg: "none", xs: "block", md: "none" } }}>
              <InventoryMobile />
            </Box>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
}
