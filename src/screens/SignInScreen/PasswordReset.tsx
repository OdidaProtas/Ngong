import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { ButtonWithLoaderComponent } from "../../components/SharedComponents";

export default function PasswordReset() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => setEmail(e.target.value);

  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">Forgot your password?</Typography>
        <Typography>We'll email you a link to reset it</Typography>
        <br />
        <Box sx={{}}>
          <Box sx={{ mt: 2 }}>
            <ButtonWithLoaderComponent loading={false} title="Reset Password" />
            <Button
            size="small"
              type="button"
              sx={{ textTransform: "none", mt: 3 }}
            >
              Learn more
            </Button>
            <Button
              type="button"
              onClick={() => {
                history.push(`/signin`);
              }}
              sx={{ textTransform: "none", mt: 3 }}
            >
              Return to login
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
