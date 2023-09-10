<script lang="ts">
    export let url:string;
</script>

<div class="recipe-btn">
    <a data-sveltekit-preload-data href={url}>View Recipe ↗</a>
</div>

<style>
    .recipe-btn{
        
        width: 100%;
        height: 100px;
 
      display: grid;
      place-items: end;
      justify-content: center;
      
    }
    .recipe-btn a{
        font-size: 30px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-decoration: none;
        color:   #347E68;
        
    }
</style>