import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// 1. Define the validation schema using Yup
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function FormikForm() {
  // 2. Define initial values (Formik manages the state)
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // 3. Define the submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // 'values' is an object with the form data
    console.log('Formik Form Submitted:', values);

    // Simulate an API call
    setTimeout(() => {
      alert('Success! (Check the console)');
      setSubmitting(false); // Tell Formik the submission is done
      resetForm(); // Clear the form
    }, 500);
  };

  return (
    <div className="form-container">
      <h2>Formik Form</h2>
      
      {/* 4. Wrap your form with the <Formik> component */}
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          // 5. Use <Form>, <Field>, and <ErrorMessage>
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;