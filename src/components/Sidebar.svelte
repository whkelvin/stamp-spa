<script lang="ts">
  import { signOut } from "../services/AuthService";
  import { isUserLoggedIn, username } from "../store/loginStore";
  import Emoji from "./icons/Emoji.svelte";
  import { ModalType, openModal } from "../services/ModalService";
  import { generateCoolName } from "../services/NameGenerator";
</script>

<div class="drawer">
  <input id="sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <slot />
  </div>
  <div class="drawer-side">
    <label for="sidebar" class="drawer-overlay" />
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      {#if $isUserLoggedIn}
        <div class="flex mb-3">
          <span class="m-auto flex">
            <Emoji symbol="👋" label="hello" />
            <div class="pl-2 font-bold">Hello {$username}</div>
          </span>
        </div>
        <button class="btn btn-warning btn-sm" on:click={signOut}
          >Log out</button
        >
      {/if}

      {#if !$isUserLoggedIn}
        <div class="flex mb-3">
          <span class="m-auto flex">
            <Emoji symbol="👋" label="hello" />
            <div class="pl-2 font-bold">Hello {generateCoolName()}</div>
          </span>
        </div>

        <button
          class="btn btn-primary btn-sm"
          on:click={() => openModal(ModalType.LoginModal)}>Login</button
        >
      {/if}
    </ul>
  </div>
</div>
