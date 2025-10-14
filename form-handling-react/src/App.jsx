import React from "react";
/*import RegistrationForm from "./components/RegistrationForm";
// import FormikForm from "./components/FormikForm"; // uncomment to test Formik

function App() {
  return (
    <div>
      <RegistrationForm />
      {/* <FormikForm /> }
    </div>
  );
}

export default App;



*/


//import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    /*<div>
      <h1>Controlled Form</h1>
      < RegistrationForm /> */
      <div>
      <h1>Formik Form</h1>
      <FormikForm />
    </div>
  );
}

export default App;
