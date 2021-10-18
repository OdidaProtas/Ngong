import React from "react";
import { useAxiosRequest } from "../../../hooks";
import { FormComponent } from "../../SharedComponents";

import { fields, validationSchema, initialState } from "./form";

export default function HomeCreateStore() {
  const { loading } = useAxiosRequest();
  const handleClose = () => {};
  const handleSubmit = (value: any) => {
    const { phone } = value;
    console.log(phone);
  };
  return (
    <div>
      <FormComponent
        fields={fields}
        validationShema={validationSchema}
        initialState={initialState}
        handleSubmit={handleSubmit}
        loading={loading}
        btnTitle="Create Store"
        snackBarOptions={{
          open: false,
          severity: "error",
          message: "An error occured",
          handleClose: handleClose,
        }}
      />
    </div>
  );
}
