import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Registering user:", values);

    // Mock API call
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      alert("User registered successfully (mock API)!");
      resetForm();
    } else {
      alert("Failed to register user.");
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: "300px", margin: "auto" }}>
          <h2>Register (Formik)</h2>

          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          <br /><br />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          <br /><br />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          <br /><br />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
