import { get } from "svelte/store";
import { stampToken, refreshTokenIntervalId } from "../store/loginStore";
import * as authService from "../../data/services/authService";

export async function signInWithGithub() {
  const jwt = await authService.signInWithGithub();
  signIn(jwt);
}

export async function signOut() {
  await authService.signOut();

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
    const jwt = await authService.refreshToken();
    stampToken.update(() => {
      return jwt;
    });
    window.localStorage.setItem("stampToken", jwt);
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
