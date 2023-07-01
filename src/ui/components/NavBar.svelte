<script lang="ts">
  import { signOut } from "../../ui/services/authService";
  import StampIcon from "./icons/StampIcon.svelte";
  import { isUserLoggedIn } from "../../ui/store/loginStore";
  import { ModalType, openModal } from "../services/modalService";
  import { username } from "../../ui/store/loginStore";
  import Emoji from "./icons/Emoji.svelte";
</script>

<div class="navbar bg-neutral text-neutral-content w-full">
  <div class="flex-none visible sm:hidden">
    <label for="sidebar" class="btn btn-square btn-ghost">
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
    </label>
  </div>

  <div class="ml-2 sm:ml-8 flex-1">
    <StampIcon />
    <div class="ml-4 text-xl font-black text-primary">Stamp</div>
  </div>

  {#if !$isUserLoggedIn}
    <button
      on:click={() => openModal(ModalType.LoginModal)}
      class="btn btn-sm btn-outline btn-primary mr-2 invisible sm:visible"
    >
      Log In
    </button>
  {/if}

  {#if $isUserLoggedIn}
    <span class="m-auto flex mr-4 invisible sm:visible">
      <Emoji symbol="👋" label="hello" />
      <div class="pl-2 font-bold">Hello {$username}</div>
    </span>
    <label
      class="btn btn-sm btn-outline btn-warning mr-2 invisible sm:visible"
      on:click={signOut}
    >
      Log Out
    </label>
  {/if}
</div>
