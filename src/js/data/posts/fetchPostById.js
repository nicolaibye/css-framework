import { baseUrl } from "../../constants/api.js";
import { displayMessage } from "../../present/common/displayMessage.js";
import { getFromLocalStorage } from "../../helpers/getFromLocalStorage.js";
import { noroffKey } from "../../constants/api.js";

export async function fetchPostById(postId) {
  try {
    const token = getFromLocalStorage("accessToken");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": noroffKey,
      },
    };

    const params = `?_author=true&_comments=true`;
    const url = `${baseUrl}social/posts/${postId}${params}`;

    const response = await fetch(url, options);

    const post = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch post from API call");
    }
    return post.data;
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
    setTimeout(() => {
      const message = document.querySelector("#message");
      message.innerHTML = "";
    }, 2500);
  }
}
