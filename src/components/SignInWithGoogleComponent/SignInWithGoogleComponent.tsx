import { Typography } from "@mui/material";
import useStyles from "./SignInWithGoogleComponent.styles";

interface SignInWithGoogleInterface {
  title: string;
  context: string;
}

const iconUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png";

export default function SignInWithGoogleComponent({
  title,
  context,
}: SignInWithGoogleInterface) {
  const classes = useStyles();
  const isLogin = context === "login";
  return (
    <div className={classes.root}>
      <img className={classes.icon} src={iconUrl} />
      <Typography className={classes.btnText} variant="body1">
        {isLogin ? "Login" : "Register"} with Google
      </Typography>
    </div>
  );
}
