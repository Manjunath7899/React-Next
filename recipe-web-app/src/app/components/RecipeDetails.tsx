import React from "react";
import "./styles/styles.css";

interface RecipeDetailsProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  ingredients: string[];
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  id,
  name,
  image,
  cuisine,
  ingredients,
}) => {
  return (
    <div className="recipe-details-container">
      <div>
        <img className="recipe-image" src={image} alt={`${name} Recipe`} />
        <h2 className="recipe-name">{name}</h2>
        <p className="recipe-cusine">{cuisine}</p>
      </div>
      <div>
        {ingredients &&
          ingredients.length > 0 &&
          ingredients.map((item, index) => (
            <ul className="ingredients-list" key={index}>
              <li>{item}</li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
