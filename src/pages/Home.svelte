<script lang="ts">
  import { onMount } from "svelte";
  import YoutubePost from "../components/YoutubePost.svelte";
  import { PostApi, Configuration } from "stamp-api-client";
  import { STAMP_API_BASE_URL } from "../configs/constants";

  let posts = [];

  onMount(async () => {
    const config = new Configuration({
      basePath: STAMP_API_BASE_URL,
    });
    const postApi = new PostApi(config);
    const res = await postApi.getRecentPosts({
      page: 1,
      size: 5,
    });
    posts = res.posts;
  });
</script>

<div class="max-w-2xl mx-auto">
  <div class="mx-auto container text-xl font-bold p-5">Home</div>

  {#each posts as post}
    <YoutubePost {...post} />
  {/each}
</div>
