import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity((p) => p + 1);
  };
  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity((p) => p - 1);
    }
  };
  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 2, mb: 3 }}>
        <Button
          size="small"
          variant="outlined"
          color="inherit"
          disableRipple
          disableFocusRipple
        >
          <Box>
            <IconButton onClick={handleRemove}>
              <Remove />
            </IconButton>
          </Box>
          <Box>
            <Button size="small">{quantity}</Button>
          </Box>
          <Box>
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
          </Box>
        </Button>
      </Box>
    </Container>
  );
}
