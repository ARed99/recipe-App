<script>
	import Search from "./Search.svelte";

</script>
<div class="nav-bar">
    <div class="title">
        <a data-sveltekit-preload-data href="/">
        <h1>
            Recipe App
        </h1>
    </a>
    </div>
    <div class="search-box">
        <Search/>
    </div>
</div>

<style>
    a{
        text-decoration: none;
    }
 
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
    .title h1:hover{
        color: #1f5d4a;
    }
</style>