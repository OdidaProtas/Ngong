import { Form, Formik } from "formik";
import React, { useState } from "react";
import EditorNav from "./EditoNav";
import EditorAppBarDrawer from "./EditorAppBarDrawer";
import EditorView from "./EditorView";

export default function Editor() {
  const [mode, setMode] = useState("desktop");
  const handleMChange = (m: string) => setMode(m);
  return (
    <div>
      <Formik
        initialValues={{
          welcomeText: "Welcome to our store",
          welcomeTextVisible: true,
        }}
        onSubmit={() => console.log("hehe")}
      >
        {({ values, handleChange, touched, errors }) => {
          return (
            <Form>
              <EditorAppBarDrawer mode={mode} handleModeChange={handleMChange}>
                <EditorView mode={mode} handleModeChange={handleMChange} />
              </EditorAppBarDrawer>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
