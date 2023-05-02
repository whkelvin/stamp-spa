<script lang="ts">
  export let title: string = "Default Title";
  export let rootDomain: string = "youtube.com";
  export let link = "https://www.youtube.com/embed/j6ow-UemzBc";
  export let description: string = "lorem lorem ";
</script>

<div class="container bg-neutral sm:rounded-lg p-5 mx-auto mt mb-2 sm:mb-5">
  <div class="text-xl font-bold mb-1">
    <a class="link" target="_blank" href={link}>{title}</a>
  </div>
  <span class="badge bg-github text-white mb-3">Source: {rootDomain}</span>
  <div class="whitespace-pre-line">{description}</div>
</div>
