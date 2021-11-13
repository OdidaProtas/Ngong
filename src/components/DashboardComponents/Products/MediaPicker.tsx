import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import DropZone from "./ProductFormWidgets/DropZone";
import { useParams } from "react-router";
import { axiosInstance } from "../../../state";
import CircularProgress from "@mui/material/CircularProgress";

export default function MediaPicker({ images, setImages }: any) {
  const [selectedLength, setSelectedLength] = useState(0);
  const [loadig, setLoading] = useState(false);

  const { productID }: any = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/product-media/${productID}`)
      .then((res) => {
        const media = res.data.map((data: any) => data.url);
        const newImages = [...images];
        setImages(newImages.concat(media));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      {loadig ? (
        <div
          style={{
            position: "absolute",
            padding: "100px",
            alignItems: "center",
            justifyContent: "center",
          } as any}
        >
          <CircularProgress />
        </div>
      ) : null}

      <Grid container  mb={1}>
        {images.map((img: any) => (
          <Grid
            sx={{
              border: "1px solid gray",
              borderRadius: "4px",
            }}
            item
            xs={6}
            md={3}
          >
            <img width="100%" src={img} />
          </Grid>
        ))}
      </Grid>

      <DropZone
        setLoading={setLoading}
        setImagesLength={setSelectedLength}
        imagesLength={selectedLength}
        images={images}
        setImages={setImages}
      />
    </div>
  );
}
