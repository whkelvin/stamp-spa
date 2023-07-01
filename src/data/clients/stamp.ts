import * as stampApiClient from "stamp-api-client";
import { STAMP_API_BASE_URL } from "../../configs/constants";

export interface Post {
  id: string;
  title: string;
  description: string;
  link: string;
  createdDate: string;
  rootDomain: string;
}

export interface PostResultSet {
  count: number;
  posts: Array<Post>;
  pageSize: number;
}

export interface CreatePostRequest {
  title: string;
  link: string;
  rootDomain: string;
  description: string;
}

const config = new stampApiClient.Configuration({
  basePath: STAMP_API_BASE_URL,
});

const authApi = new stampApiClient.AuthApi(config);
const postApi = new stampApiClient.PostApi(config);

export async function getRecentPosts(
  lastFetchedItemId: string,
  pageSize: number
): Promise<PostResultSet> {
  const res: stampApiClient.PostResultSet = await postApi.getRecentPosts({
    lastFetchedItemId: lastFetchedItemId,
    size: pageSize,
  });

  const result: PostResultSet = {
    count: res.count,
    pageSize: res.pageSize,
    posts: res.posts.map((item) => {
      const post: Post = {
        id: item.id,
        link: item.link,
        title: item.title,
        rootDomain: item.rootDomain,
        createdDate: item.createdDate,
        description: item.description,
      };
      return post;
    }),
  };

  return result;
}

export async function loginWithGithub(accessToken: string): Promise<string> {
  const req: stampApiClient.LogInRequest = {
    accessToken: accessToken,
    authProvider: "github",
  };
  const res: stampApiClient.LogInResponse = await authApi.logIn({
    logInRequest: req,
  });
  return res.jwt;
}

export async function refreshToken(): Promise<string> {
  const res: stampApiClient.RefreshTokenResponse = await authApi.refreshToken();
  return res.jwt;
}

export async function createPost(req: CreatePostRequest): Promise<Post> {
  const createPostRequest: stampApiClient.CreatePostRequest = {
    postPostRequest: {
      title: req.title,
      link: req.link,
      rootDomain: req.rootDomain,
      description: req.description,
    },
  };

  const post: stampApiClient.Post = await postApi.createPost(createPostRequest);

  const result: Post = {
    description: post.description,
    rootDomain: post.rootDomain,
    createdDate: post.createdDate,
    title: post.title,
    link: post.link,
    id: post.id,
  };
  return result;
}
