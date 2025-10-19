/*import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import './App.css'; // We'll add some styles here later

function App() {
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;




*/




import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm'; // Import FormikForm
import './App.css'; 

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <hr /> {/* Add a line to separate them */}
      <FormikForm />
    </div>
  );
}

export default App;