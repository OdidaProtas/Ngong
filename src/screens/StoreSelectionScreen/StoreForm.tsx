import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ButtonWithLoaderComponent } from "../../components/SharedComponents";
import { useAxiosRequest } from "../../hooks";
import { AuthContext, axiosInstance } from "../../state";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { StateContext } from "../../state/appstate";

const override = css`
  display: block;
  border-color: purple;
`;

export default function StoreForm() {
  const { push } = useHistory();

  const [name, setName] = useState("");
  const [typing, setTyping] = useState(false);
  const [lookup, setLookup] = useState(false);
  const [notTaken, setNotTaken] = useState(false);
  const [looked, setLooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    authState: {
      user: { email },
    },
  }: any = useContext(AuthContext);

  const { stateDispatch }: any = useContext(StateContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .post("/stores", { name })
      .then((res) => {
        stateDispatch({ type: "ADD_NEW_STORE", payload: res.data });
        setLoading(false);
        push(`/admin/${res.data.id}`);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  const handleChange = (e: any) => {
    // alert("hhee");
    setNotTaken(false);
    setLooked(false);
    if (!typing) setTyping(true);
    setName(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setTyping(false);
      setLookup(true);

      axiosInstance
        .get(`/lookup/${name}`)
        .then((res) => {
          setLookup(false);
          setLooked(true);
          setNotTaken(res.data);
        })
        .catch((e) => {
          setLookup(false);
          setLooked(true);
        });
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [name]);

  return (
    <div style={{ minWidth: "100%" }}>
      CREATE A STORE
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Typography sx={{ mt: 5 }}>
          This store will be connected to{" "}
          <span style={{ fontWeight: "bold" }}>{email}</span> , and is free for
          30 days.
        </Typography>
        <TextField
          sx={{ mt: 3, mb: 3 }}
          placeholder="Set a name for your store"
          label="Name"
          fullWidth
          required
          onChange={handleChange}
        />
        {looked && !notTaken && name.length > 0 ? (
          <Typography sx={{ mb: 2 }} color="error">
            <span style={{ fontWeight: "bold" }}>{name}</span> is unavailable
          </Typography>
        ) : null}
        {!notTaken ? (
          <div>
            {typing || lookup ? (
              <div>
                Checking availability of{" "}
                <span style={{ fontWeight: "bold" }}>{name}</span>
                <div className="pulse-loader">
                  <ClipLoader
                    color={"#000"}
                    loading={true}
                    css={override}
                    size={20}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            <Typography sx={{ mb: 2 }} color="success">
              <span style={{ fontWeight: "bold" }}>{name}</span> is available
            </Typography>
            <ButtonWithLoaderComponent loading={loading} title={"Create"} />
          </div>
        )}
      </form>
    </div>
  );
}
