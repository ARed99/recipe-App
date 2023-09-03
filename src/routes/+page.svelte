<script>
	
	import HomeMeal from "../componets/cards/HomeMeal.svelte";
	import SearchResult from "../componets/cards/SearchResult.svelte";

	const MAX_MEAL_NUMBER = 10
const get = async()=>{
	let  meals = [];
	for (let i = 0; i < MAX_MEAL_NUMBER; i++) {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await response.json();

  meals.push(data.meals[0]); // Add the meal to the array
}
return meals

}

get()
</script>
<div class="box">
	
{#await get()}
	<h1>loading..</h1>
{:then meals} 
	{#each meals as meal }
		<HomeMeal meal={meal}/>
	{/each}
{/await}

</div>


<style>
	.box{
		padding: 20px;
		display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjust column width as needed */
  gap: 20px; /* Adjust the gap between cards as needed */
  justify-content: center; 
	}
</style>
