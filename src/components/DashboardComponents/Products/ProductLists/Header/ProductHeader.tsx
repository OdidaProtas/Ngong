import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import useModalControls from "../../../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../../../SharedComponents";
import Export from "../../Export";
import Import from "../../Import";
import MobileExportImport from "../MobileExportImport";
import SwitchMode from "../SwitchMode";

export default function ProductHeader({ children }) {
  const { toggle, open } = useModalControls();

  const [openExport, setOpenExport] = useState(false);

  const { push } = useHistory();

  const { id }: any = useParams();

  const toggleExport = () => {
    setOpenExport((p) => !p);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SwitchMode option="Inventory" />
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
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
