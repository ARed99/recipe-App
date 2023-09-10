<script>
	import SearchResult from "./SearchResult.svelte";


export let mealData;
const meal = {
    name:mealData.strMeal,
    area:mealData.strArea,
    category:mealData.strCategory,
    btn:false,
    id:mealData.idMeal,
    thumb:mealData.strMealThumb
}
</script>
<div class="view-meal">
    <div class="details">
    <SearchResult meal={meal}/>
    </div>
    <div class="instructions">
        <p>
           {mealData.strInstructions}
        </p>
    </div>
</div>

<style>
    p{
        font-size: 24px;
        word-break: keep-all;
        word-wrap: break-word;
        padding: 10px;
    }
</style>