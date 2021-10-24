import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { ButtonWithLoaderComponent } from "../../components/SharedComponents";

export default function LoginForm() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push("/store-login")
  };

  const handleChange = (e: any) => setEmail(e.target.value);

  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">LOGIN</Typography>
        <Typography>You must be signed in to continue</Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ mt: 2 }}>odida.protas@gmail.com</Typography>
              <Button sx={{ textTransform: "none", mt: 2 }} color="secondary">
                Change email
              </Button>
            </div>
            <TextField
              onChange={handleChange}
              required
              type="password"
              placeholder="Enter your password"
              label="Password"
              fullWidth
              sx={{ mt: 3 }}
            />
            <Button
              onClick={() => history.push("/signin/password-reset")}
              sx={{ textTransform: "none", mt: 2 }}
              color="secondary"
            >
              Forgot Password
            </Button>
            <Box sx={{ mt: 2 }}>
              <ButtonWithLoaderComponent loading={false} title="Continue" />
              <Button
                type="button"
                onClick={() => {
                  history.push(`/signin/new`);
                }}
                sx={{ textTransform: "none", mt: 3 }}
              >
                Need an account? Get started
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  );
}
