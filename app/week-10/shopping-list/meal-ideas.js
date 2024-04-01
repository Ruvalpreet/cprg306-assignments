"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  async function loadMealIdeas() {
    if (ingredient) {
      const data = await fetchMealIdeas(ingredient);
      setMeals(data);
    }
  }
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="text-white">
      <h1>Meal Ideas</h1>
      <ul>
        {meals &&
          meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)}
      </ul>
    </div>
  );
}

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.replace(
        /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu,
        ""
      )}`
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
}
