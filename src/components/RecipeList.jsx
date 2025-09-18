/*import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;




import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

*/




import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {/* 🔗 Link to details page */}
          <Link to={`/recipes/${recipe.id}`} style={{ marginRight: '10px' }}>
            View Details
          </Link>

          {/* 🔗 Link to edit page */}
          <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: '10px' }}>
            Edit
          </Link>

          {/* 🗑️ Delete button */}
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

