export interface UserClaim {
  authProviderName: string;
  isAdmin: boolean;
  username: string;
  exp: number;
}

export function parseJwt(token: string): UserClaim | null {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const claimObj = JSON.parse(jsonPayload);
    if (claimObj["authProviderName"] == undefined) {
      return null;
    }
    if (claimObj["isAdmin"] == undefined) {
      return null;
    }
    if (claimObj["username"] == undefined) {
      return null;
    }
    if (claimObj["exp"] == undefined) {
      return null;
    }

    const claim: UserClaim = {
      isAdmin: claimObj["isAdmin"],
      authProviderName: claimObj["authProviderName"],
      username: claimObj["username"],
      exp: claimObj["exp"],
    };

    return claim;
  } catch (error) {
    return null;
  }
}

export function isTokenExpired(token: string): boolean {
  const claim = parseJwt(token);
  if (!claim) return true;
  return Date.now() >= claim.exp * 1000;
}
