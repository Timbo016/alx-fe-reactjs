<<<<<<< HEAD
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx';

import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserProfile from './components/UserProfile';
/*function App() {
=======
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
>>>>>>> 0beb19b (Added DeleteRecipeButton, EditRecipeButton, moved recipeStore into components)
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
<<<<<<< HEAD
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

function App() {
  return (
    <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John" age="30" bio="A software developer from Lagos" />
      <UserProfile name="Mary" age="22" bio="Enjoys cooking and traveling" />
=======
}

export default App

*/
import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
>>>>>>> 0beb19b (Added DeleteRecipeButton, EditRecipeButton, moved recipeStore into components)
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 0beb19b (Added DeleteRecipeButton, EditRecipeButton, moved recipeStore into components)
