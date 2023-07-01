import * as stamp from "../../data/clients/stamp";
import { type NewPost } from "../models/newPost";
import { type Post } from "../models/post";
import * as postsFeedStore from "../../ui/store/postsFeedStore";

export async function createPost(newPost: NewPost) {
  const req: stamp.CreatePostRequest = {
    link: newPost.link,
    title: newPost.title,
    rootDomain: newPost.rootDomain,
    description: newPost.description,
  };
  const result = await stamp.createPost(req);
  const post: Post = {
    id: result.id,
    description: result.description,
    rootDomain: result.rootDomain,
    title: result.title,
    link: result.link,
    createdDate: result.createdDate,
  };
  postsFeedStore.addPost(post);
}

export async function loadRecentPosts(
  lastFetchedItemId: string,
  pageSize: number
): Promise<stamp.PostResultSet> {
  const res = await stamp.getRecentPosts(lastFetchedItemId, pageSize);
  postsFeedStore.addPosts(res.posts);
  return res;
}
