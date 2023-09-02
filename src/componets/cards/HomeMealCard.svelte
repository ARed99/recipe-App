<script>
	import RecipeViewBtn from "../Buttons/RecipeViewBtn.svelte";

</script>
<div class="home-card">
    <div class="thumb">
        <img src="https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg" alt="" width="300px" height="400px">
    </div>
    <div class="recipe-link">
        <RecipeViewBtn recipeUrl={"dasdad"}/>
    </div>
</div>

<style>
    .home-card{
        width: 300px;
        height: 300px;
        border-radius: 20px;
    
        -webkit-box-shadow: 0px 9px 12px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 9px 12px 0px rgba(0,0,0,0.75);
box-shadow: 0px 9px 12px 0px rgba(0,0,0,0.75);

    }
    .thumb{
        width: 100%;
        height: 200px;
    }
    .thumb img{
        height: 250px;
        object-fit: cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        
    }

</style>