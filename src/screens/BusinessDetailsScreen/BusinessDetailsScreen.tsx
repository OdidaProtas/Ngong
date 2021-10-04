import { Divider, Grid, Button, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useStyles from "./BusinessDetailsScreen.styles";
import EditIconButton from "../../components/EditBusinessDetailsModal/EditBusinessDetailsModal";
import Image from "../../assets/images/crochet.jpg";
import ConfirmationModalComponent from "../../components/ConfirmationModalComponent/ConfirmationModalComponent";
import useModalControls from "../../hooks/modals/useModalControls";

export default function BusinessDetailsScreen() {
  const classes = useStyles();
  const { open, toggle } = useModalControls();

  return (
    <div>
      <Typography variant="h6">Business Name</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Typography>
      <div>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.toolbar}>
              <Typography variant="body2" className={classes.sectionTitle}>
                General Information
              </Typography>
              <EditIconButton
                innitialState={{
                  name: "Name",
                  descriptition: "description",
                  productType: "Clothing and apparel",
                }}
                context="identity"
              />
            </div>
            <Divider />
            <div className={classes.bodyTitleContainer}>
              <Typography className={classes.infoTitle} variant="caption">
                Name
              </Typography>
            </div>

            <Typography>Business Name</Typography>
            <div className={classes.bodyTitleContainer}>
              <Typography variant="caption">Description</Typography>
            </div>

            <Typography className={classes.infoTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              quis quo, quibusdam voluptatum ea dignissi
            </Typography>
            <div className={classes.bodyTitleContainer}>
              <Typography className={classes.infoTitle} variant="caption">
                Product Type
              </Typography>
            </div>
            <Typography>Clothing and apparell</Typography>
            <div className={classes.toolbar}>
              <Typography variant="body2" className={classes.sectionTitle}>
                Contact Information
              </Typography>
              <EditIconButton
                innitialState={{
                  phone: "+254793871876",
                  email: "bryodiiidah@gmail.com",
                }}
                context="contact"
              />
            </div>
            <Divider />
            <div className={classes.bodyTitleContainer}>
              <Typography className={classes.infoTitle} variant="caption">
                Contact Phone
              </Typography>
            </div>
            <Typography variant="body2">+2547 93 871 876</Typography>
            <div className={classes.bodyTitleContainer}>
              <Typography className={classes.infoTitle} variant="caption">
                Contact Email
              </Typography>
            </div>
            <Typography variant="body2">bryodiidah@gmail.com</Typography>
            <div className={classes.toolbar}>
              <Typography variant="body2" className={classes.sectionTitle}>
                Location Information
              </Typography>
              <EditIconButton
                innitialState={{
                  location: "Nairobi, Kenya",
                  locationDetails: "Chandaria Drive",
                }}
                context="location"
              />
            </div>
            <Divider />
            <div className={classes.bodyTitleContainer}>
              <Typography className={classes.infoTitle} variant="caption">
                Location
              </Typography>
            </div>
            <Typography>Nairobi, Kenya</Typography>
            <div className={classes.bodyTitleContainer}>
              <Typography className={classes.infoTitle} variant="caption">
                Location Details
              </Typography>
            </div>
            <Typography>Chandaria Drive</Typography>
            <Divider />
            <div className={classes.deleteContainer}>
              <Button
                className={classes.deleteBtn}
                variant="contained"
                fullWidth
              >
                Set as Default
              </Button>
              <ConfirmationModalComponent
                title="Delete Business? This action is permanent and cannot be undone"
                toggle={toggle}
                open={open}
              />
              <Button
                color="error"
                className={classes.deleteBtn}
                variant="contained"
                fullWidth
                onClick={toggle}
              >
                Delete Business
              </Button>
            </div>
          </Grid>
          <Grid item xs alignItems="center">
            <div className={classes.imageContainer}>
              <LazyLoadImage
                className={classes.image}
                src={Image}
                alt="Business overview image"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
