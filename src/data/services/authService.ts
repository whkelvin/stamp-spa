import * as stamp from "../../data/clients/stamp";
import * as firebase from "../../data/clients/firebase";

export async function signInWithGithub(): Promise<string> {
  const token = await firebase.signInWithGithub();
  const jwt: string = await stamp.loginWithGithub(token);
  return jwt;
}

export async function signOut() {
  await firebase.signOut();
}

export async function refreshToken(): Promise<string> {
  try {
    const jwt = await stamp.refreshToken();
    return jwt;
  } catch (error) {
    console.error("refresh token failed");
  }
}
