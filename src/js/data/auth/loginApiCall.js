import { baseUrl } from "../../constants/api";
import { addToLocalStorage } from "/src/js/helpers/addToLocalStorage.js";

export async function loginApiCall(user) {
  const url = `${baseUrl}auth/login`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  addToLocalStorage("accessToken", data.data.accessToken);
  addToLocalStorage("name", data.data.name);

  if (!response.ok) {
    throw new Error(data.errors?.[0]?.message || "Login unsuccessful");
  }

  return data;
}
