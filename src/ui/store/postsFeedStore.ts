import { derived, writable } from "svelte/store";
import type { Post } from "../models/post";

const _postsFeedStore = writable<Post[]>([]);

export const store = derived(
  _postsFeedStore,
  ($_postsFeedStore) => $_postsFeedStore
);

export function addPost(postToAdd: Post) {
  _postsFeedStore.update((posts: Post[]) => {
    posts = [postToAdd].concat(posts);
    return posts;
  });
}

export function addPosts(postsToAdd: Post[]) {
  _postsFeedStore.update((posts: Post[]) => {
    posts = posts.concat(postsToAdd);
    return posts;
  });
}
