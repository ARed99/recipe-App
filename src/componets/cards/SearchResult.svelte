<script lang="ts">
	import RecipeViewBtn from "../Buttons/RecipeViewBtn.svelte";
    export let meal:any;

</script>
<div class="search-result-card">
    <div class="thumb">
        <img src="https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg" alt="">
    </div>
    <div class="details">
        <h1>
           {meal.name}
        </h1>
        <h3>
            Area: {meal.area}
        </h3>
        <h3>
           Category: {meal.category}
        </h3>
       {#if meal.btn}
       <div class="btn">
        <RecipeViewBtn url={`/meal/${meal.id}`}/>
    </div>
        
       {/if}
    </div>
</div>

<style>
    .search-result-card{
        width: 90%;
        height: 300px;
     
        display: flex;
        justify-content: start;
  border-radius: 20px;
    }
    .thumb{
        width: 400px;
        height: 300px;
    }
    .thumb img{
        width: 400px;
        height: 300px;
        object-fit: cover;
        border-radius: 20px;
    }
    .details{
        padding: 20px;
    }
    h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-transform: uppercase;
        font-size: 50px;
        width: 100%;
        word-break: break-all;
    }
    h3{
        font-family: monospace;
        font-size: 40px;
    }
    .btn{
        
        width: 200px;
        
    }
</style>