import { writable } from "svelte/store";
import type { Post } from "stamp-api-client";

export const postsFeedStore = writable<Post[]>([]);
