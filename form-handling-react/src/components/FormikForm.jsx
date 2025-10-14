import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      console.log("User registered:", data);
      alert("User registered successfully!");
      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to register user");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: "300px", margin: "auto" }}>
          <h2>Register (Formik)</h2>

          <div>
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
