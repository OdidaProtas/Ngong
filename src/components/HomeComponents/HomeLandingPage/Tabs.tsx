import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaletteIcon from "@mui/icons-material/Palette";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import Storefront from "@mui/icons-material/Storefront";
import Divider from "@mui/material/Divider";

import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const action = () => {
  const { push } = useHistory();
  const { id }: any = useParams();
  return (
    <Button
      onClick={() => push(`/admin/${id}/settings`)}
      disableElevation
      variant="contained"
      sx={{ textTransform: "none" }}
      color="secondary"
      size="small"
    >
      Select a plan
    </Button>
  );
};

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
    <Box>
      <SnackbarContent
        sx={{ mt: 3 }}
        elevation={0}
        message="Give your business time to grow. Get Bizna monthly or select a one-year, two-year, or three-year plan for savings of up to 25%."
        action={action()}
      />
      <Box
        sx={{ bgcolor: "background.paper", pt: 3, mt: 3, borderRadius: "6px" }}
      >
        <Typography sx={{ ml: 2, mb: 3 }} variant="h5">
          Tips to get you started
        </Typography>
        <Divider />
        <Box
          sx={{
            flexGrow: 1,
            display: { md: "flex", lg: "flex" },
            minWidth: { xs: 300 },
            minHeight: 250,
            mt: 2,
          }}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "secondary",
              display: { xs: "block", md: "none", lg: "none" },
            }}
          >
            <Tab
              color="secondary"
              label={
                <div>
                  <Button
                    color="secondary"
                    disableRipple
                    sx={{ textTransform: "none", mt: 4, mb: 3 }}
                    size="small"
                    startIcon={<LocalOfferIcon />}
                  ></Button>
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab
              color="secondary"
              label={
                <div>
                  <Button
                    color="secondary"
                    disableRipple
                    sx={{ textTransform: "none" }}
                    size="small"
                    startIcon={<PaletteIcon />}
                  ></Button>
                </div>
              }
              {...a11yProps(1)}
            />
            <Tab
              color="secondary"
              label={
                <div>
                  <Button
                    color="secondary"
                    disableRipple
                    sx={{ textTransform: "none" }}
                    size="small"
                    startIcon={<Storefront />}
                  ></Button>
                </div>
              }
              {...a11yProps(2)}
            />
          </Tabs>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              display: { xs: "none", md: "block", lg: "block" },
            }}
          >
            <Tab
              label={
                <div>
                  <Button
                    disableRipple
                    sx={{ textTransform: "none", mt: 7 }}
                    size="small"
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
                    startIcon={<Storefront />}
                  >
                    Channels
                  </Button>
                </div>
              }
              {...a11yProps(2)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography variant="h5" sx={{ mt: 3, mb: 3 }}>
              Add a product
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Add physical items, services, or anything else you dream up.
            </Typography>
            <Button
              disableElevation
              color="secondary"
              variant="contained"
              sx={{ mt: 6, textTransform: "none", mb: 4 }}
              onClick={() => history.push(`${url}/products/new`)}
            >
              Add product
            </Button>
            <Divider />
            <Box>
              <Button sx={{ mt: 3, textTransform: "none" }}>Learn more</Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h5" sx={{ mt: 3, mb: 3 }}>
              Select a theme
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Select and make changes to your theme which will make your online
              store
            </Typography>
            <Button
              disableElevation
              color="secondary"
              variant="contained"
              sx={{ mt: 6, textTransform: "none", mb: 4 }}
            >
              Customize theme
            </Button>
            <Divider />
            <Box>
              <Button sx={{ mt: 3, textTransform: "none" }}>Learn more</Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h5" sx={{ mt: 3, mb: 3 }}>
              Add sales channels
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Select your sales channels to generate unique links for each. This
              helps us share better insights and analytics
            </Typography>
            <Button
              disableElevation
              color="secondary"
              variant="contained"
              sx={{ mt: 6, textTransform: "none", mb: 4 }}
            >
              Add channels
            </Button>
            <Divider />
            <Box>
              <Button sx={{ mt: 3, textTransform: "none" }}>Learn more</Button>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
