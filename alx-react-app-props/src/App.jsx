/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx';

import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
//import UserProfile from './components/UserProfile';
import Counter from "./components/Counter";
/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}    */


/*function App() {
  return (
    <>
      <WelcomeMessage />
    </>
  )
}

//export default App

export default App  */

/*function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;   */

/*function App() {
  return (
    <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John" age="30" bio="A software developer from Lagos" />
      <UserProfile name="Mary" age="22" bio="Enjoys cooking and traveling" />
    </div>
  );
}

return (
   <div>
      <h1>My Counter App</h1>
      <Counter />
    </div> 
  );


export default App;


import UserProfile from "./components/UserProfile"; // (if you still need this)
//import Counter from "./components/Counter";         // (if you still need this)
import ProfilePage from "./components/ProfilePage"; // FIXED path
import UserContext from "./UserContext";



function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap ProfilePage in the provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

*/


// src/App.jsx
import React, { useMemo } from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';

function App() {
  // useMemo so the object reference doesn't change on every render
  const userData = useMemo(() => ({
    name: "Jane Doe",
    email: "jane.doe@example.com"
  }), []);

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
