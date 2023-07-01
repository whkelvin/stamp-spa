import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut as signOutFromFirebase,
} from "firebase/auth";
import { firebaseApp } from "../../data/store/firebaseStore";
import { get } from "svelte/store";

export async function signInWithGithub(): Promise<string> {
  const provider = new GithubAuthProvider();
  provider.addScope("user");
  const auth = getAuth(get(firebaseApp));
  const userCred = await signInWithPopup(auth, provider);
  const credential = GithubAuthProvider.credentialFromResult(userCred);
  const token = credential.accessToken;
  return token;
}

export async function signOut() {
  const auth = getAuth(get(firebaseApp));
  signOutFromFirebase(auth);
}
