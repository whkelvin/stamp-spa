<script lang="ts">
  import StampIcon from "./icons/StampIcon.svelte";
</script>

<div class="navbar bg-neutral text-neutral-content w-full">
  <div class="flex-none invisible">
    <button class="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-5 w-5 stroke-current"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        /></svg
      >
    </button>
  </div>
  <div class="flex-1">
    <StampIcon />
    <div class="ml-4 text-xl font-black text-primary">Stamp</div>
  </div>
</div>
