import Cookies from "js-cookie";

export function handleSetCookie(name: string, value: any): void {
  Cookies.set(name, value, {
    expires: 7,
    path: "/",
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });
}

export function getCookie(name: string): string | undefined {
  const cookieValue = Cookies.get(name);
  return cookieValue;
}
