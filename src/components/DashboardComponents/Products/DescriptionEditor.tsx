import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import React from "react";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import ClearIcon from "@mui/icons-material/Clear";
import { Field } from "formik";

const CustomFont = () => <FontDownloadIcon />;
const CustomClear = () => <ClearIcon />;

export default class DescriptionEditor extends React.Component<
  {},
  { text: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" } as any; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: any) {
    this.setState({ text: value });
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  render() {
    return (
      <div className="editor">
        <Field name="desc">
          {({ field }) => (
            <ReactQuill
              theme="snow"
              value={field.value}
              onChange={field.onChange(field.name)}
              modules={this.modules}
              placeholder="Description"
              formats={this.formats}
            />
          )}
        </Field>
      </div>
    );
  }
}
