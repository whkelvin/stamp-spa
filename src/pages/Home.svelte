<script lang="ts">
  import { onMount } from "svelte";
  import YoutubePost from "../components/YoutubePost.svelte";

  let postResultSet = {
    count: 3,
    page: 1,
    pageSize: 5,
    totalPages: 3,
    posts: [
      {
        id: "helfae",
        link: "https://www.youtube.com/embed/vpaCxG-4qEY",
        title: "Design Microservice the right way",
        postedDate: "2023-04-28",
        rootDomain: "youtube.com",
        description: "hell world this is the description",
      },
      {
        id: "sfeoij",
        link: "https://www.youtube.com/embed/j6ow-UemzBc",
        title: "Design Microservice the right way",
        postedDate: "2023-04-28",
        rootDomain: "youtube.com",
        description: "hell world this is the description",
      },
      {
        id: "chasefoij",
        link: "https://www.youtube.com/embed/j6ow-UemzBc",
        title: "Design Microservice the right way",
        postedDate: "2023-04-28",
        rootDomain: "youtube.com",
        description: "hell world this is the description",
      },
    ],
  };

  onMount(async () => {});
</script>

<div class="max-w-2xl mx-auto">
  <div class="mx-auto container text-xl font-bold p-5">Home</div>

  {#each postResultSet.posts as post}
    <YoutubePost {...post} />
  {/each}
</div>
