import React from "react";
import "./styles/styles.css";

interface RecipeCardProps {
  name: string;
  image: string;
  rating: string;
  cuisine: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  image,
  rating,
  cuisine,
}) => {
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={image} alt={`${name} Recipe`} />
      <h2 className="recipe-name">{name}</h2>
      <p className="recipe-rating">Rating: {rating}</p>
      <p className="recipe-cusine">{cuisine}</p>
    </div>
  );
};

export default RecipeCard;
