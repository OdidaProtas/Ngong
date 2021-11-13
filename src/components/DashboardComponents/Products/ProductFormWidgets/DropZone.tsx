import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useParams } from "react-router";
import { axiosInstance } from "../../../../state";
import Progress from "./Progress";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function DropZone(props: any) {
  const { images, setImages, imagesLength, setImagesLength, setLoading }: any =
    props;
  const [fs, setFiles] = useState([]);

  const { productID }: any = useParams();

  const [res, setRes] = useState([]);

  const onDrop = useCallback((afs: any) => {
    setLoading(true);
    setImagesLength(images.length + afs.length);
    uploadFile(afs);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ onDrop });

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const [progress, setProgress] = useState(0);

  function uploadFile(files: any) {
    const uploaders = files.map((file) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "dreamnerdy");

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post("https://api.cloudinary.com/v1_1/dreamnerd/upload", formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        })
        .then(async (response) => {
          const data = response.data;
          const fileURL = data.secure_url;
          await handleAxios(fileURL);
        });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      console.log("imekwisha");
      setLoading((prev) => !prev);
      // ... perform after upload is successful operation
    });
  }

  const handleAxios = async (url: string) => {
    try {
      const res = await axiosInstance.post(`/product-media/${productID}`, {
        url: url,
      });
      if (res) {
        console.log(res);
        const prevImages = [...images];
        prevImages.push(res.data.url);
        setImages((prev) => prevImages);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
    </Box>
  );
}
