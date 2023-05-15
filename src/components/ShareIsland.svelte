<script lang="ts">
  import YoutubeIcon from "./icons/YoutubeIcon.svelte";
  import GithubIcon from "./icons/GithubIcon.svelte";
  import { ModalType, openModal } from "../services/ModalService";
  import CreateYoutubePostModal from "./modals/CreateYoutubePostModal.svelte";
  import ComingSoonModal from "./modals/ComingSoonModal.svelte";
</script>

<div
  class="container bg-neutral sm:rounded-full mx-auto mb-2 sm:mb-5 flex drop-shadow-lg"
>
  <div class="h-full self-center pl-6 sm:pl-8 sm:pr-8 font-bold">
    Share From:
  </div>

  <ul class="menu menu-horizontal bg-neutral">
    <li>
      <button
        class="btn"
        on:click={() => openModal(ModalType.CreateYoutubePostModal)}
      >
        <YoutubeIcon />
        Youtube
      </button>
    </li>
    <li>
      <button class="btn" on:click={() => openModal(ModalType.ComingSoonModal)}>
        <GithubIcon />
        Github
      </button>
    </li>
  </ul>
</div>
