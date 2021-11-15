import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Field } from "formik";
import Appbar from "../EditoViewComponents/Appbar";
import BottomCallToAction from "../EditoViewComponents/BottomCallToAction";
import Collections from "../EditoViewComponents/Collections";
import EmailSub from "../EditoViewComponents/EmailSub";
import FeatureCards from "../EditoViewComponents/FeatureCards";
import Footer from "../EditoViewComponents/Footer";
import LandingPage from "../EditoViewComponents/LandingPage";
import MultiColumn from "../EditoViewComponents/MultiColumn";
import QuickLinks from "../EditoViewComponents/QuickLinks";
import StoreDesc from "../EditoViewComponents/StoreDesc";
import TitleComponent from "../EditoViewComponents/TitleComponent";
import Video from "../EditoViewComponents/Video";


export default function HomePage({ handleModeChange, mode }) {
  return (
    <div>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Field name="welcomeText">
          {({ field }) => <Typography>{field.value}</Typography>}
        </Field>
      </Box>
      <Divider />
      <Appbar handleChangeMode={handleModeChange} mode={mode} />
      <LandingPage />
      <Divider />
      <StoreDesc />
      <TitleComponent />
      <FeatureCards mode={mode} />
      <Collections mode={mode} />
      <Video />
      <MultiColumn />
      <BottomCallToAction />
      {/* <FullWidth /> */}
      <Divider />
      <QuickLinks />
      <Divider />
      <EmailSub />
      <Footer />
    </div>
  );
}
