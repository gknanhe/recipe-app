import React from "react";
import style from "./reciepe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.AccoladeBorder}>
      <div className={style.recipe}>
        <h1>{title}</h1>
      </div>
      <div className={style.recipeContent}>
        <div className={style.imgDiv}>
          <img className={style.image} src={image} alt="" />
        </div>
        <div className={style.ingredient}>
          <ol>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ol>
          <p>Calories: {calories}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
