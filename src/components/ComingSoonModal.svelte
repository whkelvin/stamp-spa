<script lang="ts">
  import Emoji from "./icons/Emoji.svelte";
</script>

<input type="checkbox" id="coming-soon-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <div class="flex">
      <Emoji symbol="🚀" label="Coming Soon" />
      <h3 class="font-bold text-lg ml-2">Coming Soon</h3>
    </div>

    <p class="py-4">Stay tuned. This feature is coming soon!</p>
    <div class="modal-action">
      <label for="coming-soon-modal" class="btn btn-primary">Yay!</label>
    </div>
  </div>
</div>
