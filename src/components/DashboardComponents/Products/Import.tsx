import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Import({ toggle }: any) {
  const [fileName, setFileName] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setFileName(acceptedFiles);
    // alert("an error occured");
    // toggle();
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".csv",
    maxFiles: 1,
  });

  return (
    <div>
      <Typography>
        <span style={{ color: "blue" }}>Download a sample CSV template</span> to
        see an example of the format required.
      </Typography>
      <div
        {...getRootProps()}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
          background: "lightgray",
          marginTop: "12px",
          borderRadius: "4px",
          textAlign:"center"
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select csv files</p>
        )}
      </div>
      <div>
        {Boolean(fileName.length) && (
          <div>
            <Typography sx={{ my: 2 }}>
              <span>Selected: </span>
              {fileName[0].path}
            </Typography>
          </div>
        )}
      </div>
      <FormControlLabel
        sx={{ mt: 2 }}
        control={<Checkbox color="secondary" name="checkedA" />}
        label="Overwrite any current products that have the same handle. Existing values will be used for any missing columns. Learn more        "
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "12px",
        }}
      >
        <div>
          <Button
            onClick={toggle}
            variant="outlined"
            sx={{ textTransform: "none", mr: 1 }}
            color="inherit"
          >
            Cancel
          </Button>
        </div>
        <div>
          <Button
            onClick={toggle}
            sx={{ textTransform: "none" }}
            disableElevation
            variant="contained"
            color="secondary"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
