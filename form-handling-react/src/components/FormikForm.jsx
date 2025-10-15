import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted with Formik:', values);
    alert('Registration successful with Formik!');
    resetForm();
    setSubmitting(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>User Registration (Formik)</h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username">Username:</label>
              <Field 
                type="text" 
                id="username" 
                name="username" 
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email:</label>
              <Field 
                type="email" 
                id="email" 
                name="email" 
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password">Password:</label>
              <Field 
                type="password" 
                id="password" 
                name="password" 
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '14px' }} />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Register with Formik
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;