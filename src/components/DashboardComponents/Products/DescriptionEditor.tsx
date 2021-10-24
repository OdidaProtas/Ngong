import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import React from "react";

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

  render() {
    return (
      <div className="editor">
        <ReactQuill
          theme="snow"
          placeholder="Description"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
