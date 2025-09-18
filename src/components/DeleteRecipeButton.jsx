
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";


const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Delete this recipe? This cannot be undone.');
    if (!ok) return;
    deleteRecipe(id);
    navigate('/'); // go back to list after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'red' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
