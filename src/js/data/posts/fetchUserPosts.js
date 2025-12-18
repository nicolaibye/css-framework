import { baseUrl } from "../../constants/api.js";
import { getFromLocalStorage } from "../../helpers/getFromLocalStorage.js";
import { noroffKey } from "../../constants/api.js";

export async function fetchUserPosts(userName) {
  const user = userName;
  const token = getFromLocalStorage("accessToken");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": noroffKey,
    },
  };

  const queryParams = "?_author=true";
  const response = await fetch(
    `${baseUrl}social/profiles/${user}/posts${queryParams}`,
    options,
  );
  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    throw new Error("Failed to fetch user posts");
  }
}
