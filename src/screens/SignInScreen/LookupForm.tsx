import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { ButtonWithLoaderComponent } from "../../components/SharedComponents";
import SignInContext from "./state";

export default function LookupForm() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const [email, setEmail] = useState("");

  const { dispatch }: any = useContext(SignInContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: "ADD_EMAIL", payload: email });
    history.push(`/signin/verify`);
  };

  const handleChange = (e: any) => setEmail(e.target.value);

  return (
    <div>
      <Box sx={{ mt: 1 }}>
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
            <TextField
              onChange={handleChange}
              required
              type="email"
              placeholder="Enter email address"
              label="Email"
              fullWidth
              sx={{ mt: 1 }}
            />
            <Box sx={{ mt: 2 }}>
              <ButtonWithLoaderComponent loading={false} title="Continue" />
              <Button
                type="button"
                onClick={() => {
                  history.push(`/signin/new`);
                }}
                sx={{ textTransform: "none", mt: 2, mb: 2 }}
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
