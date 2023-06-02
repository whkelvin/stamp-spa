import { writable, readable, derived, Writable } from "svelte/store";
import { parseJwt } from "../services/JWTService";

export const stampToken = writable<string>("");
export const username = derived<Writable<string>, string>(
  stampToken,
  ($stampToken) => {
    const claim = parseJwt($stampToken);
    if (claim != null) {
      return claim.username;
    } else {
      return "";
    }
  }
);

export const isUserLoggedIn = derived<Writable<string>, boolean>(
  stampToken,
  (stampToken) => stampToken != ""
);

export const refreshTokenIntervalId = writable<number | null>(null);
