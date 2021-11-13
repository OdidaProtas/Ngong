import Button from "@mui/material/Button/Button";
import useStyles from "./DateSalutionComponent.styles";
import { useContext } from "react";
import { AuthContext } from "../../../state";

export default function DateSalutationComponent() {
  const {
    authState: { user },
  }: any = useContext(AuthContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>WELCOME, {user?.lastName.toUpperCase()}</div>
    </div>
  );
}
const sx: any = {
  btn: {
    textTransform: "none",
    marginTop: "18px",
  },
  title: {
    marginTop: "18px",
  },
};
