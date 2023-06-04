<script lang="ts">
  import Emoji from "../icons/Emoji.svelte";
  import { ModalType } from "../../services/ModalService";
</script>

<input
  type="checkbox"
  id={ModalType.ComingSoonModal.toString()}
  class="modal-toggle"
/>
<label
  for={ModalType.ComingSoonModal.toString()}
  class="modal modal-bottom sm:modal-middle cursor-pointer z-10"
>
  <label class="modal-box relative" for="">
    <div class="flex">
      <Emoji symbol="⚡" label="Coming Soon" />
      <h3 class="font-bold text-lg ml-2">Coming Soon</h3>
    </div>

    <p class="py-4">Stay tuned. This feature is coming soon!</p>
    <div class="modal-action">
      <label for={ModalType.ComingSoonModal.toString()} class="btn btn-primary"
        >Yay!</label
      >
    </div>
  </label>
</label>
