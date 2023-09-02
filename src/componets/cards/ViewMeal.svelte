<script>
	import SearchResult from "./SearchResult.svelte";

</script>
<div class="view-meal">
    <div class="details">
  <SearchResult meal={{id:2 , name:"meal name ", area:"england" , category:"chicken" , btn:false}}/>
    </div>
    <div class="instructions">
        <p>
            Heat the grill to high. Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins. Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft. Mix the yogurt, egg and parmesan together, then add a little seasoning.\r\n\r\nStir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through. Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top. Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden.
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