import RecipeDetails from "../../../components/RecipeDetails";
import React from "react";

async function fetchRecipeDetails(recipeId: string) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${recipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const RecipeDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const recipeDetails = await fetchRecipeDetails(id);

  return (
    <div>
      <RecipeDetails
        id={recipeDetails.id}
        image={recipeDetails.image}
        cuisine={recipeDetails.cuisine}
        ingredients={recipeDetails.ingredients}
        name={recipeDetails.name}
      />
    </div>
  );
};

export default RecipeDetailsPage;