<script lang="ts">
  import Emoji from "../icons/Emoji.svelte";
  import {
    ModalType,
    ComingSoonModalCheckboxId,
    closeModal,
  } from "../../services/modalService";
</script>

<input type="checkbox" id={ComingSoonModalCheckboxId} class="modal-toggle" />
<label
  for={ComingSoonModalCheckboxId}
  class="modal modal-bottom sm:modal-middle cursor-pointer"
>
  <label class="modal-box relative" for="">
    <div class="flex">
      <Emoji symbol="⚡" label="Coming Soon" />
      <h3 class="font-bold text-lg ml-2">Coming Soon</h3>
    </div>

    <p class="py-4">Stay tuned. This feature is coming soon!</p>
    <div class="modal-action">
      <button
        for={ModalType.ComingSoonModal.toString()}
        class="btn btn-primary"
        on:click={() => closeModal(ModalType.ComingSoonModal)}>Yay!</button
      >
    </div>
  </label>
</label>
