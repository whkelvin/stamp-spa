<script lang="ts">
  import Emoji from "../icons/Emoji.svelte";
  import { signInWithGithub } from "../../../ui/services/authService";
  import GithubIcon from "../icons/GithubIcon.svelte";
  import { isUserLoggedIn } from "../../../ui/store/loginStore";
  import {
    ModalType,
    closeModal,
    LoginModalCheckboxId,
  } from "../../services/modalService";

  $: {
    if ($isUserLoggedIn) {
      closeModal(ModalType.LoginModal);
    }
  }
</script>

<input type="checkbox" id={LoginModalCheckboxId} class="modal-toggle" />
<label
  for={LoginModalCheckboxId}
  class="modal modal-bottom sm:modal-middle cursor-pointer"
  id={ModalType.LoginModal.toString()}
>
  <label class="modal-box relative" for="">
    <div class="flex">
      <Emoji symbol="👥" label="log in" />
      <h3 class="font-bold text-lg ml-2">Log In</h3>
    </div>
    <div class="flex justify-center">
      <button
        class="btn btn-md btn-secondary m-auto"
        on:click={signInWithGithub}
      >
        <GithubIcon />
        <div class="ml-2">Github</div>
      </button>
    </div>
  </label>
</label>
