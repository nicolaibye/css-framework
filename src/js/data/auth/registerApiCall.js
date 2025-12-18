import { baseUrl } from "../../constants/api";

export async function registerApiCall(user) {
  const url = `${baseUrl}auth/register`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.[0]?.message || "Registration unsuccessful");
  }

  return data;
}
