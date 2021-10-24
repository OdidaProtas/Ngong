import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory } from "react-router";
import { ButtonWithLoaderComponent } from "../../components/SharedComponents";

export default function StoreForm() {
  const { push } = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    push("/admin/setup");
  };
  return (
    <div style={{ minWidth: "100%" }}>
      CREATE A STORE
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Typography sx={{ mt: 5 }}>
          This store will be connected to odida.protas@gmail.com, and is free
          for 30 days.
        </Typography>
        <TextField
          sx={{ mt: 2, mb: 3 }}
          placeholder="Set a name for your store"
          label="Name"
          fullWidth
        />
        <ButtonWithLoaderComponent loading={false} title={"Create"} />
      </form>
    </div>
  );
}
