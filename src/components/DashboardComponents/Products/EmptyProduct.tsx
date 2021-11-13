import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

import productAdd from "../../../assets/images/product_add.png";

import { useHistory, useParams, useRouteMatch } from "react-router";
import useModalControls from "../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../SharedComponents";
import Import from "./Import";

export default function EmptyProduct() {
const { url, path } = useRouteMatch();
const history = useHistory();
const { id }: any = useParams();

const { open, toggle } = useModalControls();

return (
  <div>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ pt: 1 }}>PRODUCTS</Box>
      <Box>
        <Button
          color="secondary"
          onClick={toggle}
          sx={{ textTransform: "none" }}
        >
          Import{" "}
        </Button>
        <ModalDialog toggle={toggle} title="Import products csv" open={open}>
          <Import toggle={toggle} />
        </ModalDialog>
      </Box>
    </Box>
    <Box
      sx={{ bgcolor: "background.paper", p: 3, borderRadius: "9px", mt: 3 }}
    >
      <div style={{ textAlign: "center" }}>
        <Box sx={{ display: { lg: "block", xs: "none", md: "block" } }}>
          <img width="50%" src={productAdd} alt="" />
        </Box>
        <Box sx={{ display: { lg: "none", xs: "block", md: "none", mb: 4 } }}>
          <img style={{ height: 144 }} width="100%" src={productAdd} alt="" />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ mt: 5 }} variant="h5">
            Add and manage your products
          </Typography>
          <Typography sx={{ mt: 3 }}>
            This is where you’ll add products and manage your pricing. You can
            also import and export your product inventory.
          </Typography>
          <Box sx={{mb:3}}>
            <Button
              disableElevation
              variant="contained"
              color="secondary"
              sx={{ textTransform: "none", mt: 5, mr: { lg: 3, md: 3 } }}
              onClick={() => history.push(`/admin/${id}/products/new`)}
            >
              Add product
            </Button>
            <Button
              disableElevation
              variant="outlined"
              color="secondary"
              sx={{ textTransform: "none", mt: 5 }}
            >
              Find Products
            </Button>
          </Box>
        </Box>
      </div>
    </Box>
  </div>
);
}
