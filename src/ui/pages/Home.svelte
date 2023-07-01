<script lang="ts">
  import YoutubePost from "../components/YoutubePost.svelte";
  import GithubPost from "../components/GithubPost.svelte";
  import InfiniteLoading from "svelte-infinite-loading";
  import ShareIsland from "../components/ShareIsland.svelte";
  import Emoji from "../components/icons/Emoji.svelte";
  import * as postsFeedStore from "../../ui/store/postsFeedStore";
  import * as postsFeedService from "../services/postsFeedService";

  let store = postsFeedStore.store;

  let lastFetchedItemId = "";
  const pageSize = 7;
  let hasPageLoaded = {};

  async function onLoadMorePosts({ detail: { loaded, complete, error } }) {
    try {
      if (hasPageLoaded[lastFetchedItemId]) {
        return;
      }

      const res = await postsFeedService.loadRecentPosts(lastFetchedItemId, pageSize);
      if (res.count != 0) {
        hasPageLoaded[lastFetchedItemId] = true;
        lastFetchedItemId = res.posts.at(-1).id;
        loaded();
      } else {
        complete();
      }
    } catch (e) {
      error();
    }
  }
</script>

<div class="max-w-2xl mx-auto">
  <div class="mx-auto container text-xl font-bold p-5">Home</div>

  <ShareIsland />
  {#each $store as post}
    {#if post.rootDomain == "youtube.com"}
      <YoutubePost {...post} />
    {/if}

    {#if post.rootDomain == "github.com"}
      <GithubPost {...post} />
    {/if}
  {/each}

  <div class="m-3">
    <InfiniteLoading on:infinite={onLoadMorePosts}>
      <div
        slot="noMore"
        class="alert alert-info mb-2 sm:mb-5 container mx-auto"
      >
        <div>
          <div>
            <Emoji symbol="🚧" label="construction" />
            <span class="font-bold ml-2 mr-2">More Coming Soon!</span>
            <Emoji symbol="🚧" label="construction" />
          </div>
        </div>
      </div>

      <div
        slot="error"
        class="alert alert-error mb-2 sm:mb-5 container mx-auto"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>Unable to load posts!</span>
        </div>
      </div>
    </InfiniteLoading>
  </div>
</div>
