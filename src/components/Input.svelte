<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  interface $$props extends HTMLInputAttributes {}
</script>

<input
  {...$$restProps}
  class="w-full px-6 py-4 rounded-[40px] shadow-brutalist border border-black focus:outline-none"
/>
