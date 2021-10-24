import { height } from "@mui/system";
import React, { Component } from "react";

export default class MediaPicker extends Component<{}, any> {
  fileObj: any = [];
  fileArray: any = [];

  constructor(props: any) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e: any) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e: any) {
    e.preventDefault();
    console.log(this.state.file);
  }

  fileRef: any = React.createRef();

  upload() {
    this.fileRef.current.click();
  }

  render() {
    return (
      <form>
        <div className="form-group multi-preview">
          {(this.fileArray || []).map((url: any) => (
            <img src={url} alt="..." />
          ))}
        </div>

        <div>
          <div style={{ display: "grid" }}>
            <button
              style={{ height: 300, textAlign:"center" }}
              type="button"
              id="plus"
              onClick={this.upload}
            >
              MEDIA  
              <br />
              +
              <br />
              Click or drag and drop files to upload
            </button>
          </div>
          <input
            ref={this.fileRef}
            hidden
            type="file"
            style={{ height: 100 }}
            // className="form-control"
            onChange={this.uploadMultipleFiles}
            multiple
          />
        </div>
        {/* <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={this.uploadFiles}
        >
          Upload
        </button> */}
      </form>
    );
  }
}
