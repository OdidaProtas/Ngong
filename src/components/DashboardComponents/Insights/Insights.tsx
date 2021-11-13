import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import ReportDetail from "../Reports/ReportDetail";

const options = [
  {
    title: "Sales",
    desc: "Make business decisions by comparing sales across products, staff, channels, and more.",
    items: [
      "Sales over time",
      "Sales by product",
      "Sales by product variant SKU",
      "Sales by product vendor",
      "Sales by discount",
      "Sales by traffic referrer",
      "Sales by billing location",
      "Sales by channel",
      "Sales by customer name",
      "Average order value over time",
    ],
    val: "KSH 0.00",
  },
  {
    title: "Acquisition",
    desc: "Increase visitor engagement by knowing where your visitors are coming from and measuring the success of your campaigns.",
    items: [
      "Sessions over time",
      "Sessions by referrer",
      "Sessions by location",
    ],
    val: "3",
  },
  {
    title: "Orders",
    desc: "Get a sense of your store's order volume and flow, as well as overall fulfillment performance, with orders reports.",
    items: [
      "Orders over time",
      "Product orders and returns",
      "Fulfillment over time",
      "Fulfillment, shipping, and delivery times",
    ],
    val: "0",
  },
  {
    title: "Profit margin",
    desc: "See how products and locations contribute to the gross profit and margin for your business.",
    items: ["Profit by product", "Profit by product variant SKU"],
    val: "KSH 0.00",
  },
  {
    title: "Customers",
    desc: "Gain insights into who your customers are and how they interact with your business.",
    items: [
      "Customers over time",
      "First-time vs returning customer sales",
      "Customers by location",
      "Returning customers",
      "One-time customers",
      "At-risk customers",
      "Loyal customers",
    ],
    val: "0",
  },
  {
    title: "Behavior",
    desc: "Improve your store by understanding how visitors move through your site.",
    items: [
      "Online store conversion over time",
      "Top online store searches",
      "Top online store searches with no results",
      "Product recommendation conversions over time",
      "Sessions by landing page",
      "Sessions by device",
      "Online store cart analysis",
      "Online store speed",
    ],
    val: "0",
  },
  {
    title: "Marketing",
    desc: "Gain insights into where your online store customers are converting from.",
    items: [
      "Sessions attributed to marketing",
      "Sales attributed to marketing",
      "Conversion by first interaction",
      "Conversion by last interaction",
      "Attribution model comparison",
    ],
    val: "KSH 0.00",
  },
  {
    title: "Finances",
    desc: "View your store’s finances including sales, returns, taxes, payments, and more.  ",
    items: ["Finances summary", "Total sales", "Taxes", "Tips", "Payments"],
    val: "KSH 0.00",
  },

  {
    title: "Inventory",
    desc: "Track and understand the movement of your products for more efficient inventory management.  ",
    items: [
      "Percent of inventory sold",
      "ABC analysis by product",
      "Average inventory sold per day",
      "Month-end inventory snapshot",
      "Month-end inventory value",
    ],
    val: "",
  },
];

export default function Insights() {
  const { path } = useRouteMatch();
  const { push } = useHistory();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          Reports
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              disableElevation
              variant="contained"
              color="secondary"
              size="small"
              sx={{ textTransform: "none", mb: 1, mt: -3.5 }}
            >
              Create custom report
            </Button>
          </div>
          <Grid container spacing={2} mb={12}>
            {options.map(({ title, desc, items, val }, idx) => (
              <Grid key={idx} item xs={12} lg={6}>
                <Paper elevation={0} sx={{ p: 2 }}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography
                    sx={{ color: "text.secondary", my: 2 }}
                    variant="body2"
                  >
                    {desc}
                  </Typography>
                  <Typography>For 30 days</Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
                    {val}
                  </Typography>
                  <Typography variant="caption">REPORTS</Typography>
                  {items.slice(0, 2).map((i, j) => (
                    <Box>
                      <Button
                        onClick={() =>
                          push(
                            `insights/${i.toLowerCase().split(" ").join("_")}`
                          )
                        }
                        disableRipple
                        size="small"
                        sx={{
                          textTransform: "none",
                          justifyContent: "flex-start",
                        }}
                        key={j}
                      >
                        {i}
                      </Button>
                    </Box>
                  ))}
                  <Accordion elevation={0}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography color="info">More</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {items.slice(2, items.length).map((i, j) => (
                        <Box>
                          <Button
                            disableRipple
                            onClick={() =>
                              push(
                                `insights/${i
                                  .toLowerCase()
                                  .split(" ")
                                  .join("_")}`
                              )
                            }
                            sx={{
                              textTransform: "none",
                              justifyContent: "flex-start",
                            }}
                            key={j}
                          >
                            {i}
                          </Button>
                        </Box>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Route>
        <Route exact path={`${path}/:name`}>
          <ReportDetail />
        </Route>
      </Switch>
    </div>
  );
}
