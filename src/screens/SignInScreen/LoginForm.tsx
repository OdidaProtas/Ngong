import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { ButtonWithLoaderComponent } from "../../components/SharedComponents";
import { useAxiosRequest } from "../../hooks";
import { AuthContext, axiosInstance } from "../../state";
import SignInContext from "./state";

export default function LoginForm() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const { signIn } = useContext(AuthContext) as any;

  const { email, stateDispatch }: any = useContext(SignInContext);
  const { processRequest, data, loading }: any = useAxiosRequest();

  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const requestOptions = {
      method: "post",
      endpoint: `/login/`,
      payload: {
        email,
        password,
      },
    };
    processRequest(requestOptions);
  };

  useEffect(() => {
    if (data) {
      signIn(data);
      const user: any = jwtDecode(data);
      history.push(`/store-login/${user.id}`);
    }
  }, [data]);

  useEffect(() => {
    if (email === "" || email === undefined || email === null) {
      history.push("/signin");
    }
  }, []);

  const handleChange = (e: any) => setPassword(e.target.value);

  return (
    <div>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">LOGIN</Typography>
        <Typography sx={{ mt: 1 }}>
          You must be signed in to continue
        </Typography>
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
              <Typography sx={{ mt: 1 }}>{email}</Typography>
              <Button
                onClick={() => history.push("/signin")}
                sx={{ textTransform: "none", mt: 1 }}
                color="secondary"
              >
                Change
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
              <ButtonWithLoaderComponent loading={loading} title="Continue" />
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
