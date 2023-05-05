<script lang="ts">
  import YoutubeIcon from "./icons/YoutubeIcon.svelte";
  import GithubIcon from "./icons/GithubIcon.svelte";
</script>

<div
  class="container bg-neutral sm:rounded-full mx-auto mb-2 sm:mb-5 flex drop-shadow-lg"
>
  <div class="h-full self-center pl-6 sm:pl-8 sm:pr-8 font-bold">
    Share From:
  </div>

  <ul class="menu menu-horizontal bg-neutral">
    <li>
      <label for="coming-soon-modal" class="btn">
        <YoutubeIcon />
        Youtube
      </label>
    </li>
    <li>
      <label for="coming-soon-modal" class="btn">
        <GithubIcon />
        Github
      </label>
    </li>
  </ul>
</div>
