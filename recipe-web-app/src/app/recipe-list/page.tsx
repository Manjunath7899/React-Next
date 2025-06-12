import React from "react";
import RecipeList from "../components/RecipeList";

async function fetchRecipeList() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data?.recipes;
  } catch (error) {
    console.log(error);
  }
}

const RecipeListPage = async () => {
  const recipeList = await fetchRecipeList();
  return (
    <div>
      <RecipeList recipeList={recipeList}/>
    </div>
  );
};

export default RecipeListPage;
