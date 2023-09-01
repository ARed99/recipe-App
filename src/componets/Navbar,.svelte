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
</style>