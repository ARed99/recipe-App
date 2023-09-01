<script lang="ts">
    import Navbar from '../componets/Navbar,.svelte';
import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
<Navbar/>
<slot>

</slot>