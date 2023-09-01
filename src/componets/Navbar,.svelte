<script>
	import Search from "./Search.svelte";

</script>
<div class="nav-bar">
    <div class="title">
        <h1>
            Recipe App
        </h1>
    </div>
    <div class="search-box">
        <Search/>
    </div>
</div>

<style>
    .nav-bar{
        background-color:  #347E68;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        
    }
    .title{
        width: 400px;
        padding: 10px;
        display: grid;
        place-items: center;
        justify-content: center;
    }
    .title h1{
        color: white;
        font-family: 'Irish Grover' , cursive;
        font-size: 50px;
    }
</style>