<script>
	import ViewMeal from "../../../componets/cards/ViewMeal.svelte";

	
export let data;

</script>
<div class="view">
    <div class="box">
        <ViewMeal mealData={data.meal}/>

    </div>
    
</div>

<style>
    .view{
        width: 100%;
        
    }
    .box{
        padding: 20px;
    }
</style>