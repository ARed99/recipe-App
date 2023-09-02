<script>
	import RecipeViewBtn from "../Buttons/RecipeViewBtn.svelte";

</script>
<div class="search-result-card">
    <div class="thumb">
        <img src="https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg" alt="">
    </div>
    <div class="details">
        <h1>
            meal name here
        </h1>
        <h3>
            Area:
        </h3>
        <h3>
           Category:
        </h3>
        <div class="btn">
            <RecipeViewBtn url={"fasdff"}/>
        </div>
    </div>
</div>

<style>
    .search-result-card{
        width: 90%;
        height: 300px;
     
        display: flex;
        justify-content: start;
        -webkit-box-shadow: 0px 9px 12px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 9px 12px 0px rgba(0,0,0,0.75);
box-shadow: 0px 9px 12px 0px rgba(0,0,0,0.75);
    }
    .thumb{
        width: 400px;
        height: 300px;
    }
    .thumb img{
        width: 400px;
        height: 300px;
        object-fit: cover;
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