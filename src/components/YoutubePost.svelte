<script lang="ts">
  export let title: string = "Default Title";
  export let rootDomain: string = "youtube.com";
  export let link = "https://www.youtube.com/embed/j6ow-UemzBc";
  export let description: string = "lorem lorem ";
</script>

<div class="container bg-neutral sm:rounded-lg p-5 mx-auto mt mb-2 sm:mb-5">
  <div class="text-xl font-bold mb-1">
    <a class="link" href={link} target="_blank">{title}</a>
  </div>
  <span class="badge bg-youtube text-white">Source: {rootDomain}</span>

  <iframe
    class="pt-5 pb-5"
    width="100%"
    style="aspect-ratio: 16 / 12;"
    src={link}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />

  <div>{description}</div>
</div>
