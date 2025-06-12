import React from "react";
import RecipeCard from "./RecipeCard";
import Link from "next/link";

interface Recipe {
  id: number;
  name: string;
  image: string;
  rating: string;
  cuisine: string;
}

interface RecipeListProps {
  recipeList: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipeList }) => {
  return (
    <div className="recipe-container">
      <Link className="back-home-btn" href={"/"}>
        Go to Home
      </Link>
      <div className="recipe-grid">
        {recipeList &&
          recipeList.length > 0 &&
          recipeList.map((recipeItem) => {
            return (
              <Link href={`/recipe-list/recipe-details/${recipeItem.id}`} key={recipeItem.id}>
                <RecipeCard
                  name={recipeItem.name}
                  image={recipeItem.image}
                  cuisine={recipeItem.cuisine}
                  rating={recipeItem.rating}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default RecipeList;
