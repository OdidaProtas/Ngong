import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaletteIcon from "@mui/icons-material/Palette";
import { useHistory, useRouteMatch } from "react-router-dom";

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { url } = useRouteMatch();
  const history = useHistory();


  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: 250,
        marginTop: "36px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", }}
      >
        <Tab
          label={
            <div>
              <Button
                disableRipple
                sx={{ textTransform: "none" }}
                size="small"
                startIcon={<LocalOfferIcon />}
              >
                Products
              </Button>
            </div>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <div>
              <Button
                disableRipple
                sx={{ textTransform: "none" }}
                size="small"
                startIcon={<PaletteIcon />}
              >
                Themes
              </Button>
            </div>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <div>
              <Button
                disableRipple
                sx={{ textTransform: "none" }}
                size="small"
                startIcon={<MonetizationOnIcon />}
              >
                Channels
              </Button>
            </div>
          }
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h6">Add a product</Typography>
        <Typography sx={{ mt: 2 }}>
          Add physical items, services, or anything else you dream up.
        </Typography>
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          sx={{ mt: 6, textTransform: "none" }}
          onClick={()=>history.push(`${url}/products/new`)}
        >
          Add product
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6">Select a theme</Typography>
        <Typography sx={{ mt: 2 }}>
          Select and make changes to your theme which will make your online
          store
        </Typography>
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          sx={{ mt: 6, textTransform: "none" }}
        >
          Customize theme
        </Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6">Add sales channels</Typography>
        <Typography sx={{ mt: 2 }}>
          Select your sales channels to generate unique links for each. This
          helps us share better insights and analytics
        </Typography>
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          sx={{ mt: 6, textTransform: "none" }}
        >
          Add channels
        </Button>
      </TabPanel>
    </Box>
  );
}

