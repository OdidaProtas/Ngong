import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import useModalControls from "../../../../hooks/modals/useModalControls";
import { StateContext } from "../../../../state/appstate";
import { ModalDialog } from "../../../SharedComponents";
import Export from "../Export";
import Import from "../Import";
import MobileExportImport from "./MobileExportImport";
import MobileTabs from "./MobileTabs";
import ProductTabs from "./ProductTabs";
import SwitchMode from "./SwitchMode";

export default function ProductLists() {
  const { push } = useHistory();
  const { id }: any = useParams();
  const { open, toggle } = useModalControls();
  const [openExport, setOpenExport] = useState(false);
  const toggleExport = () => setOpenExport((p) => !p);
  return (
    <Box>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SwitchMode option="All Products" />
        <div>
          <ModalDialog toggle={toggle} open={open} title="Import Products csv">
            <Import toggle={toggle} />
          </ModalDialog>

          <ModalDialog
            toggle={toggleExport}
            open={openExport}
            title="Export Products"
          >
            <Export toggle={toggleExport} />
          </ModalDialog>
          <div style={{ display: "flex" }}>
            <div>
              <Button
                onClick={toggle}
                sx={{
                  textTransform: "none",
                  display: { xs: "none", lg: "inline" },
                }}
                color="secondary"
              >
                Import
              </Button>
            </div>

            <div>
              {" "}
              <Button
                onClick={toggleExport}
                color="secondary"
                sx={{
                  textTransform: "none",
                  display: { xs: "none", lg: "inline" },
                }}
              >
                Export
              </Button>
            </div>
            <div style={{ display: "flex" }}>
              <Box
                sx={{ display: { lg: "none", xs: "block" } }}
                component="span"
              >
                <MobileExportImport
                  toggleExport={toggleExport}
                  toggleImport={toggle}
                />
              </Box>
              <Button
                color="secondary"
                size="small"
                variant="contained"
                sx={{ textTransform: "none" }}
                disableElevation
                onClick={() => push(`/admin/${id}/products/new`)}
              >
                Add product
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
        <ProductTabs />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
        <MobileTabs />
      </Box>
    </Box>
  );
}
