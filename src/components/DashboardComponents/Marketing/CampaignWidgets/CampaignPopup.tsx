import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useHistory, useParams } from "react-router";
import Button from "@mui/material/Button";
import MoreVert from "@mui/icons-material/MoreVert";
import ListItems from "./ListItems";

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

export default function CampaignPopup({ toggle }) {
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
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab
            sx={{ textTransform: "none", fontSize: "9px" }}
            label="All"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "9px" }}
            label="Ads"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "9px" }}
            label="Email"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "9px" }}
            label="Social post"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ textTransform: "none", fontSize: "9px" }}
            label=" SMS"
            {...a11yProps(3)}
          />
        </Tabs>
        <Typography sx={{ my: 1 }}>
          This activity will appear in a new campaign (Untitled campaign).
        </Typography>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ListItems />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* <ListItems /> */}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ListItems />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            {/* <ListItems /> */}
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            {/* <ListItems /> */}
          </TabPanel>
        </SwipeableViews>
        <Button
          onClick={toggle}
          variant="outlined"
          color="inherit"
          sx={{ textTransform: "none" }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
