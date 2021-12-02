import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import { useContext, useState } from "react";
import { HoimeNavBar } from "../../components/HomeComponents";

import Logo from "../../assets/images/home_temp.png";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import useModalControls from "../../hooks/modals/useModalControls";
import { AuthContext } from "../../state";
import { useHistory } from "react-router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import kitenge from "../../assets/images/kitenge.jpg";
import SignInContext from "../SignInScreen/state";

const brands = [brand1, brand2, brand3, brand4];

export default function HomeScreen() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const { dispatch }: any = useContext(SignInContext);
  const onSubmit = (e: any) => {
    e.preventDefault();
    // dispatch({ type: "ADD_EMAIL", payload: email });
    history.push(`/signin/verify`);
  };
  return (
    <>
      <HoimeNavBar />
      <Toolbar />
      <Container sx={{ mt: { lg: 16} }}>
        <Grid container mt={6}>
          <Grid item xs={12} lg={6} mt={12} sx={{ pl: { lg: 9, xs: 2 } }}>
            <Typography variant="h2">Your only retail management</Typography>
            <Typography sx={{ mt: 3 }}>
              Ship, sell and process payments anywhere. Build customizable
              online stores that tell a story about your brand.
            </Typography>
            <form onSubmit={onSubmit}>
              <TextField
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                sx={{ mt: 4 }}
                color="secondary"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        type="submit"
                        // onClick={() => history.push("/signin")}
                        color="secondary"
                        sx={{ textTransform: "none" }}
                        disableElevation
                        disableRipple
                        variant="contained"
                      >
                        Get started
                      </Button>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              ></TextField>
            </form>
          </Grid>
          <Grid item mt={6} xs={12} lg={6}>
            <img style={{ maxWidth: "100%" }} src={Logo} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ p: 4, bgcolor: "purple", mt: 12 }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          Bring your business online
        </Typography>
        <Typography variant="h6" sx={{ my: 2, color: "white" }}>
          Create an ecommerce website backed by powerful tools that help you
          find customers, drive sales, and manage your day-to-day.
        </Typography>
        <Button
          disableRipple
          endIcon={<ArrowRightAltIcon />}
          sx={{ textTransform: "none" }}
        >
          Discover more examples
        </Button>
        <ImageList
          cols={2}
          rowHeight={200}
          sx={{ mb: 12, display: { lg: "none" } }}
        >
          {examples.map(({ name, img, category }, i) => (
            <ImageListItem key={i}>
              <img
                src={`${img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={name}
                loading="lazy"
              />
              <ImageListItemBar
                title={name}
                subtitle={category}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${name}`}
                  >
                    <ArrowRightAltIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <ImageList cols={4} rowHeight={420} sx={{ mb: 12 }}>
            {examples.map(({ name, img, category }, i) => (
              <ImageListItem key={i}>
                <img
                  src={`${img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={name}
                  subtitle={category}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${name}`}
                    >
                      <ArrowRightAltIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Typography variant="h4" sx={{ color: "white" }}>
          Take the best path forward
        </Typography>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} lg={3}>
            <PlayCircleFilledWhiteIcon sx={{ color: "white" }} />
            <Typography variant="h6" sx={{ my: 2, color: "white" }}>
              Start an online business
            </Typography>
            <Typography sx={{ color: "white" }}>
              Create a business, whether you’ve got a fresh idea or are looking
              for a new way to make money.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <StorefrontIcon sx={{ color: "white" }} />
            <Typography variant="h6" sx={{ my: 2, color: "white" }}>
              Move your business online
            </Typography>
            <Typography sx={{ color: "white" }}>
              Turn your retail store into an online store and keep serving
              customers without missing a beat.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <ChangeCircleIcon sx={{ color: "white" }} />
            <Typography variant="h6" sx={{ my: 2, color: "white" }}>
              Switch to MyBizz
            </Typography>
            <Typography sx={{ color: "white" }}>
              Bring your business to MyBizz, no matter which ecommerce platform
              you’re currently using.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <AssignmentIndIcon sx={{ color: "white" }} />
            <Typography variant="h6" sx={{ my: 2, color: "white" }}>
              Get an expert
            </Typography>
            <Typography sx={{ color: "white" }}>
              Get set up with the help of a trusted freelancer or agency from
              the MyBizz Experts Marketplace.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ p: { lg: 12, xs: 2 }, textAlign: "center" }}>
        <Typography variant="h4">With you wherever you are going</Typography>
        <Box sx={{ mx: { lg: 9, xs: 1 }, mt: 4 }}>
          <Typography sx={{ color: "text.secondary" }} variant="h6">
            One platform with all the ecommerce and point of sale features you
            need to start, run, and grow your business.
          </Typography>
        </Box>
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12} lg={6}>
            <img
              style={{ maxWidth: "100%" }}
              src="https://res.cloudinary.com/dreamnerd/image/upload/v1637737056/media/emfsbxdwikgdozxu8cfn.png"
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ textAlign: "left", display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography variant="h5">Sell everywhere</Typography>
              <Typography sx={{ mt: 2 }}>
                Use one platform to sell products to anyone, anywhere—in person
                with Point of Sale and online through your website, social
                media, and online marketplaces.
              </Typography>
              <Button
                endIcon={<ArrowRightAltIcon />}
                color="secondary"
                sx={{ textTransform: "none", mt: 2 }}
              >
                Explore ways to sell
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={9}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ textAlign: "left", display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography variant="h5">Market your business</Typography>
              <Typography sx={{ mt: 2 }}>
                Take the guesswork out of marketing with built-in tools that
                help you create, execute, and analyze digital marketing
                campaigns.
              </Typography>
              <Button
                endIcon={<ArrowRightAltIcon />}
                color="secondary"
                sx={{ textTransform: "none", mt: 2 }}
              >
                Explore how to market your business
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img
              style={{ maxWidth: "100%" }}
              src="https://don16obqbay2c.cloudfront.net/wp-content/uploads/Home_page_Google_MC_FB-1591955663.png"
              alt=""
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12} lg={6}>
            <img
              style={{ maxWidth: "100%" }}
              src="https://res.cloudinary.com/dreamnerd/image/upload/v1637737967/media/xsp2jgfp3n0saumu5yhg.png"
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ textAlign: "left", display: "flex", alignItems: "center" }}
          >
            <Box>
              <Typography variant="h5">Manage everything</Typography>
              <Typography sx={{ mt: 2 }}>
                Gain the insights you need to grow—use a single dashboard to
                manage orders, shipping, and payments anywhere you go.
              </Typography>
              <Button
                endIcon={<ArrowRightAltIcon />}
                color="secondary"
                sx={{ textTransform: "none", mt: 2 }}
              >
                Explore how to manage your business
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4">
          Empowering <Box style={{ fontWeight: "900" } as any}>independent</Box>{" "}
          business owners
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
          Anyone can get an online store and start selling on the go.
        </Typography>
        <Button
          endIcon={<ArrowRightAltIcon />}
          color="secondary"
          disableRipple
          sx={{ textTransform: "none", mt: 2, justifyContent: "flex-start" }}
        >
          Learn more about MyBizz
        </Button>
      </Container>

      {/* <Box sx={{ my: 6, bgcolor: "lightgray", py: 4 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h5">Our features</Typography>
        </Container>
      </Box> */}
      {/* <Globe /> */}
      <Container>
        <Box>
          <Grid container mt={6} justifyContent="center">
            <Grid item lg={4} xs={12}>
              <img
                style={{
                  maxWidth: "100%",
                  height: "100%",
                }}
                src={kitenge}
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                bgcolor: "purple",
                p: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ color: "white", mb: 3 }}>
                  “We’ve been able to build something in a year that a lot of
                  brands haven’t actually gotten to in 10 years.”
                </Typography>
                <img height="100" src={brand2} alt="" />
                <Typography variant="h6" sx={{ color: "white", my: 2 }}>
                  Fashion | Nairobi
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    color: "white",
                    mt: 1,
                  }}
                  endIcon={<ArrowRightAltIcon />}
                >
                  Visit store
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid mt={2} container justifyContent="center">
            {brands.map((b, i) => (
              <Grid item mt={2} xs={3} lg={2}>
                <img style={{ maxWidth: "100%" }} src={b} key={i} alt="" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Box sx={{ bgcolor: "whitesmoke" }} pl={{ lg: 3 }} mt={6}>
        <Grid container>
          <Grid item xs={12} lg={6} pl={{ lg: 6, xs: 1 }} pt={2}>
            <Typography variant="h4" sx={{ my: 2 }}>
              Get the help you need, <br /> every step of the way
            </Typography>
            <Grid container spacing={2}>
              {supportOptions.map(({ title, desc, coa }, i) => (
                <Grid item xs={6}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block" }}
                  >
                    {desc}
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ArrowRightAltIcon />}
                    color="secondary"
                    sx={{
                      textTransform: "none",
                      justifyContent: "left",
                    }}
                  >
                    {coa}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img
              style={{ maxWidth: "100%", height: "100%" }}
              src="https://res.cloudinary.com/dreamnerd/image/upload/v1637734241/media/numdxfn4r12edaah7k9t.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center", pt: 3 }}>
        <Typography sx={{ mt: 2 }} variant="h5">
          Start your business journey with MyBizz
        </Typography>
        <Typography sx={{ my: 3 }}>
          Try MyBizz for free, and explore all the tools and services you need
          to start, run, and grow your business.
        </Typography>
        <Button
          sx={{ textTransform: "none" }}
          onClick={() => history.push("/signin")}
          disableElevation
          variant="contained"
          color="secondary"
        >
          Get started
        </Button>
        <Box sx={{ textAlign: "right" }}>
          <Button
            disableRipple
            size="small"
            color="secondary"
            sx={{ textTransform: "none" }}
            endIcon={<ArrowUpwardIcon />}
            onClick={() => window.scrollTo(0, 0)}
          >
            Scroll to top
          </Button>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "purple" }} p={3}>
        <Box>
          <Box sx={{ display: "flex", color: "white" }}>
            {/* <Typography>About</Typography> */}
            {/* <Typography sx={{ ml: 2 }}>Sitemap</Typography> */}
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{ color: "white", display: "flex", justifyContent: "flex-end" }}
        >
          <Typography>Terms of service</Typography>
          <Typography sx={{ ml: 2 }}>Privacy policy </Typography>
        </Box>
      </Box>
    </>
  );
}

const examples = [
  {
    name: "Jewels Shop",
    category: "Jewelry",
    img: "https://res.cloudinary.com/dreamnerd/image/upload/v1637731873/media/mqw9c4heiuadioylcdd7.jpg",
  },
  {
    name: "Beauty shop",
    category: "Beauty and cosmetics",
    img: "https://res.cloudinary.com/dreamnerd/image/upload/v1637731822/media/ynrlfm1jpvomn7pkgocp.jpg",
  },
  {
    name: "Yellow",
    category: "Art",
    img: "https://res.cloudinary.com/dreamnerd/image/upload/v1637732244/media/q9pzicxygoonym8vbdfu.jpg",
  },
  {
    name: "Melly's",
    category: "Food and drinks",
    img: "https://res.cloudinary.com/dreamnerd/image/upload/v1637731836/media/y3omurx8volfeus9xdon.jpg",
  },
];

const supportOptions = [
  {
    title: "MyBizz support",
    desc: "Contact support 24/7, whether you’re troubleshooting issues or looking for business advice.",
    coa: "Support",
  },
  {
    title: "MyBizz Apps",
    desc: "Add features and functionality to your business with apps that integrate directly with MyBizz.",
    coa: "Apps",
  },
  {
    title: "Experts Marketplace",
    desc: "Hire MyBizz expert to help you with everything from store setup to SEO.",
    coa: "Experts",
  },
];

const features = [
  {
    title: "AI powered analytics and insights",
  },
];
