import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../../../state";
import { StateContext } from "../../../../state/appstate";

export default function SEO({ values, handleChange }) {
  const { myStores }: any = useContext(StateContext);

  const [isedit, setIsEdit] = useState(false);

  const { id }: any = useParams();

  const toggleEdit = () => {
    setIsEdit((p) => !p);
  };

  if (!values.title)
    return <Box sx={{ mt: 2 }}>Add product title to preview  SEO</Box>;

  if (!myStores)
    return (
      <Box>
        <Skeleton />
      </Box>
    );

  const { name }: any =
    myStores?.filter((store: any) => store.id === id)[0] || "<storename>";

  return (
    <div>
      <Box>
        <Link sx={{ textDecoration: "none" }}>
          {values.seoTitle || values.title}
        </Link>
        <Typography color="secondary">
          https://shops.tokea.biz/{`${name}/${values.seoLink || values.title}`}
        </Typography>
        <Typography sx={{ mt: 1 }}>{values.seoDesc}</Typography>
        <Divider sx={{ mt: 2, mb: 3 }} />
        {!isedit && (
          <Box>
            <Button
              onClick={toggleEdit}
              disableElevation
              color="secondary"
              sx={{
                textTransform: "none",
              }}
            >
              Edit SEO
            </Button>
          </Box>
        )}

        {isedit && (
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              sx={{ mb: 3 }}
              label="Page Title"
              name="seoTitle"
              onChange={handleChange}
              value={values.seoTitle === null ? values.title : values.seoTitle}
              placeholder={values.title}
              size="small"
            ></TextField>
            <TextField
              label="Page description"
              name="seoDesc"
              placeholder={"Description"}
              onChange={handleChange}
              value={values.seoDesc}
              fullWidth
              multiline
              rows={6}
              sx={{ mb: 3 }}
            ></TextField>
            <TextField
              onChange={handleChange}
              name="seoLink"
              label="URL Handle"
              value={values.seoLink === null ? values.title : values.seoLink}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    https://shops.tokea.biz/
                    {`${name}/`}
                  </InputAdornment>
                ),
              }}
              fullWidth
              size="small"
            ></TextField>
          </Box>
        )}
      </Box>
    </div>
  );
}
