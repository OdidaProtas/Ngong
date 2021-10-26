import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box/Box";

export default function ActiveDates() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <div>
      <Box sx={{ mt: 3 }}>Active Dates</Box>
    </div>
  );
}
