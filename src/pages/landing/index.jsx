import { useEffect } from "react";
import fetchInstance from "../../utility/fetchInstance";
import { useState } from "react";

export default function LandingPage() {
  const [data, setData] = useState(null);
  if (!data) {
    getData(setData);
    return <div>loading...</div>;
  }
  return (
    <div >
      {data.meals.map((meal) => (
        <div key={meal.idMeal}>{meal.strMeal}</div>
      ))}
    </div>
  );
}

async function getData(setData) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const data = await res.json();
  setData(data);
}
