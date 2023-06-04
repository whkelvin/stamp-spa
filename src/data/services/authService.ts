import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut as signOutFromFirebase,
} from "firebase/auth";
import { firebaseApp } from "../store/firebaseStore";
import { get } from "svelte/store";
import * as stamp from "stamp-api-client";
import { STAMP_API_BASE_URL } from "../../configs/constants";
import { stampToken, refreshTokenIntervalId } from "../store/loginStore";

const config = new stamp.Configuration({
  basePath: STAMP_API_BASE_URL,
});
const authApi = new stamp.AuthApi(config);

export async function signInWithGithub() {
  const provider = new GithubAuthProvider();
  provider.addScope("user");
  const auth = getAuth(get(firebaseApp));
  const userCred = await signInWithPopup(auth, provider);
  const credential = GithubAuthProvider.credentialFromResult(userCred);
  const token = credential.accessToken;

  const req: stamp.LogInRequest = {
    accessToken: token,
    authProvider: "github",
  };
  const res: stamp.LogInResponse = await authApi.logIn({ logInRequest: req });
  signIn(res.jwt);
}

export async function signOut() {
  const auth = getAuth(get(firebaseApp));
  signOutFromFirebase(auth);

  stampToken.update(() => "");
  window.localStorage.removeItem("stampToken");
  cancelRefreshTokenInteval();
}

async function signIn(token: string) {
  cancelRefreshTokenInteval(); //cancel any existing refresh token job before creating new ones
  stampToken.update(() => token);
  window.localStorage.setItem("stampToken", token);
  scheduleRefreshTokenIn20Min();
}

async function refreshToken() {
  try {
    const res: stamp.RefreshTokenResponse = await authApi.refreshToken();
    stampToken.update(() => {
      return res.jwt;
    });
    window.localStorage.setItem("stampToken", res.jwt);
  } catch (error) {
    console.error("refresh token failed");
  }
}

async function scheduleRefreshTokenIn20Min() {
  const min = 20;
  const sec = min * 60;
  const milSec = sec * 1000;
  const id = window.setInterval(refreshToken, milSec);
  refreshTokenIntervalId.update(() => id);
}

async function cancelRefreshTokenInteval() {
  const id: number | null = get(refreshTokenIntervalId);
  if (id != null) {
    clearInterval(id);
  }
}
