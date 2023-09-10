import type { PageLoad } from './$types';
export const load = (async ({params , fetch}) => {
    const mealId = params.id 
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId)
    const data = await res.json()
    const meal = data.meals[0]
  

    return {
        meal
    };
}) satisfies PageLoad;