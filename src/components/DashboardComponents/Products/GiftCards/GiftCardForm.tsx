import IconButton from "@mui/material/IconButton/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory, useParams, useRouteMatch } from "react-router";
import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { StateContext } from "../../../../state/appstate";
import { axiosInstance } from "../../../../state";
import TablesSkeleton from "../../../SharedComponents/TablesSkeleton/TablesSkeleton";
import useMyProducts from "../../../../hooks/stores/useMyProducts";
import useModalControls from "../../../../hooks/modals/useModalControls";
import Alert from "@mui/material/Alert";
import productValidation from "../validation";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box/Box";
import Chip from "@mui/material/Chip";
import {
  ButtonWithLoaderComponent,
  ModalDialog,
} from "../../../SharedComponents";
import Button from "@mui/material/Button";
import MoreVert from "@mui/icons-material/MoreVert";
import Duplicate from "../Duplicate/Duplicate";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import DescriptionEditor from "../DescriptionEditor";
import MediaPicker from "../MediaPicker";
import Pricing from "../Pricing";
import Typography from "@mui/material/Typography";
import OptionsForm from "../OptionsForm/OptionsForm";
import SEO from "../ProductFormWidgets/SEO";
import ProductStatus from "../ProductFormWidgets/ProductStatus";
import OrganizationWidgets from "../ProductFormWidgets/OrganizationWidgets";
import ShippingForm from "../ShippingForm";
import Inventoryform from "../Inventoryform";
import Denominations from "./Denominations";

export default function GiftCardForm() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);

  const { url } = useRouteMatch();
  const { stateDispatch, loadingProducts, myProducts }: any =
    useContext(StateContext);

  const [iState, setiState] = useState({
    availability: "",
    barcode: "",
    compareAtPrice: "",
    costPerItem: "",
    desc: "",
    hasOptions: false,
    isPhysical: false,
    isTaxed: false,
    price: "",
    productType: "",
    sku: 0,
    status: "draft",
    title: "",
    trackQuantity: false,
    unit: "",
    vendor: "",
    weight: "",
    options: JSON.stringify([{ "1": null }]),
  });

  const { productID, id }: any = useParams();

  const isEdit = !!productID && productID !== "empty";

  const handleSubmit = (value: any) => {
    console.log(value);
    setLoading(true);
    if (!isEdit) {
      axiosInstance
        .post(`/products/${id}`, { ...value })
        .then((res) => {
          setLoading(false);
          stateDispatch({ type: "ADD_PRODUCT", payload: res.data });
          history.push(`/admin/${id}/products/${res.data.id}`);
        })
        .catch((e) => {
          setLoading(false);
        });
    } else {
      axiosInstance
        .patch(`/products/${productID}`, { ...value })
        .then((res) => {
          stateDispatch({
            type: "UPDATE_PRODUCT",
            id: productID,
            payload: value,
          });
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          alert("An error occured");
        });
    }
  };

  if (loadingProducts) return <TablesSkeleton />;

  const product: any =
    myProducts?.filter((product: any) => product.id === productID)[0] || iState;

  if (isEdit && !product) return <TablesSkeleton />;

  const [prod, setProd]: any = useState(product);

  useMyProducts();

  useEffect(() => {
    setProd(product);
  }, [myProducts, productID]);

  const { open, toggle } = useModalControls();

  useEffect(() => {
    const newP: any =
      myProducts?.filter((product: any) => product.id === productID)[0] ||
      iState;
    console.log(newP);
    setProd(newP);
  }, [productID]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDuplicate = () => {
    toggle();
    handleClose();
  };

  const handlePreview = () => {
    history.push(`/products-preview/${productID}`);
    handleClose();
  };

  const forward = () => {
    if (myProducts?.length > 1) {
      const index = myProducts?.indexOf(prod);
      if (index > -1) {
        const next = myProducts[index + 1]?.id;
        history.push(`/admin/${id}/products/${next}`);
      }
    }
  };

  const backward = () => {
    if (myProducts?.length > 1) {
      const index = myProducts?.indexOf(prod);
      if (index > 0) {
        const next = myProducts[index - 1]?.id;
        history.push(`/admin/${id}/products/${next}`);
      }
    }
  };

  return (
    <div>
      {isEdit && myProducts?.length === 1 ? (
        <Alert sx={{ mb: 2 }} severity="success">
          Congratulations on adding your first product!!!
        </Alert>
      ) : null}

      <Formik
        initialValues={isEdit ? prod : iState}
        validationSchema={productValidation}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, errors, touched, handleChange }) => {
          const { status } = values;
          return (
            <Form>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Button
                    type="button"
                    onClick={() => history.goBack()}
                    sx={{ mb: 2, textTransform: "none" }}
                    size="small"
                    color="secondary"
                  >
                    <ArrowBackIosIcon />
                    {isEdit ? values.title : "Add Gift Card Product"}
                  </Button>
                  {isEdit ? (
                    <Box sx={{ display: "inline" }}>
                      {status === "draft" ? (
                        <Chip
                          size="small"
                          sx={{ mb: 2, ml: 2 }}
                          label="Draft"
                          color="warning"
                        />
                      ) : null}
                      {status === "active" ? (
                        <Chip
                          size="small"
                          sx={{ mb: 2, ml: 2 }}
                          label="Active"
                          color="success"
                        />
                      ) : null}
                      {status === "archived" ? (
                        <Chip
                          size="small"
                          sx={{ mb: 2, ml: 2 }}
                          label="Archived"
                        />
                      ) : null}
                    </Box>
                  ) : null}
                </Box>
                <Box sx={{ display: isEdit ? "block" : "none" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ display: isEdit ? "block" : "none" }}>
                      <Button
                        onClick={() =>
                          history.push(`/products-preview/${productID}`)
                        }
                        color="secondary"
                        size="small"
                        sx={{
                          textTransform: "none",
                          display: { xs: "none", lg: "inline" },
                        }}
                      >
                        Preview
                      </Button>
                      <Button
                        color="secondary"
                        size="small"
                        onClick={toggle}
                        sx={{
                          textTransform: "none",
                          display: { xs: "none", lg: "inline" },
                        }}
                      >
                        Duplicate
                      </Button>
                      <ModalDialog
                        title={`Duplicate Product`}
                        open={open}
                        toggle={toggle}
                      >
                        <Duplicate toggle={toggle} value={values} />
                      </ModalDialog>
                      <div>
                        <Button
                          id="demo-positioned-button"
                          aria-controls="demo-positioned-menu"
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                          sx={{ display: { lg: "none", xs: "block" } }}
                          size="small"
                          color="inherit"
                          variant="outlined"
                          disableRipple
                        >
                          <IconButton disableRipple>
                            <MoreVert />
                          </IconButton>
                        </Button>
                        <Menu
                          id="demo-positioned-menu"
                          aria-labelledby="demo-positioned-button"
                          anchorEl={anchorEl}
                          open={menuOpen}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          <MenuItem onClick={handleDuplicate}>
                            Duplicate
                          </MenuItem>
                          <MenuItem onClick={handlePreview}>Preview</MenuItem>
                        </Menu>
                      </div>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                      <IconButton
                        onClick={backward}
                        disabled={myProducts?.length < 2}
                        size="small"
                      >
                        <ArrowBackIosIcon />
                      </IconButton>
                      <IconButton
                        onClick={forward}
                        disabled={myProducts?.length < 2}
                        size="small"
                      >
                        <ArrowForwardIos />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </div>
              <div>
                <Grid container spacing={2} mb={9}>
                  <Grid item xs={12} lg={8}>
                    <div>
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          p: { lg: 4, md: 1, xs: 1 },
                          borderRadius: "4px",
                          pt: { lg: 3, md: 3, xs: 3 },
                        }}
                      >
                        <TextField
                          sx={{ mb: 3 }}
                          size="small"
                          label="Title"
                          name={"title"}
                          value={values.title}
                          onChange={handleChange}
                          helperText={touched.title && errors.title}
                          error={touched.title && Boolean(errors.title)}
                          fullWidth
                          placeholder="Example: Pishori Rice"
                        />
                        <DescriptionEditor />
                      </Box>
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          p: { lg: 4, md: 1, xs: 1 },
                          borderRadius: "4px",
                          pt: { lg: 3, md: 3, xs: 3 },
                          mt: 3,
                        }}
                      >
                        {isEdit ? (
                          <MediaPicker setImages={setImages} images={images} />
                        ) : null}
                      </Box>
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          p: { lg: 4, md: 1, xs: 1 },
                          borderRadius: "4px",
                          pt: { lg: 3, md: 3, xs: 3 },
                          mt: 3,
                        }}
                      >
                        <Typography sx={{ mt: 2, mb: 1 }}>PRICING</Typography>
                        <Pricing values={values} handleChange={handleChange} />
                      </Box>

                      <Divider />
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          p: { lg: 4, md: 1, xs: 1 },
                          borderRadius: "4px",
                          pt: { lg: 3, md: 3, xs: 3 },
                          mt: 3,
                        }}
                      >
                        <Typography sx={{ mt: 2, mb: 1 }}>
                          Denominations
                        </Typography>
                        <Denominations
                          values={values}
                          handleChange={handleChange}
                        />
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          p: { lg: 4, md: 1, xs: 1 },
                          borderRadius: "4px",
                          pt: { lg: 3, md: 3, xs: 3 },
                          mt: 3,
                        }}
                      >
                        <Typography sx={{ mt: 2, mb: 1 }}>
                          SEO PREVIEW
                        </Typography>
                        {isEdit && (
                          <SEO values={values} handleChange={handleChange} />
                        )}
                      </Box>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        p: { lg: 4, md: 1, xs: 1 },
                        borderRadius: "4px",
                        pt: { lg: 3, md: 3, xs: 3 },
                      }}
                    >
                      <ProductStatus
                        handleChange={handleChange}
                        touched={touched.status}
                        error={errors.status}
                        value={values}
                      />
                    </Box>
                    <OrganizationWidgets
                      values={values}
                      handleChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </div>
              <div
                style={{
                  position: "fixed",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "gray",
                  padding: 20,
                  width: "100%",
                } as any}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div>
                    {!values === prod && (
                      <Button
                        sx={{ mr: 2, textTransform: "none" }}
                        color="error"
                        onClick={() => history.goBack()}
                        disableElevation
                        variant="contained"
                      >
                        Discard Changes
                      </Button>
                    )}
                  </div>
                  <div>
                    <ButtonWithLoaderComponent
                      disabled={Boolean(errors.title)}
                      loading={loading}
                      title="Save"
                    />
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <Box sx={{ mb: 18, display: "flex" }}>
        <Box>
          <Button sx={{ mr: 2 }} color="error" variant="outlined">
            Delete Product
          </Button>
        </Box>
      </Box>
    </div>
  );
}
