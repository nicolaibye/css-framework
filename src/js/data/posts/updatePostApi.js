import { baseUrl } from "../../constants/api.js";
import { getFromLocalStorage } from "../../helpers/getFromLocalStorage.js";
import { displayMessage } from "../../present/common/displayMessage.js";
import { noroffKey } from "../../constants/api.js";

export async function updatePostApi(id, post) {
  try {
    const postId = id;
    const url = `${baseUrl}social/posts/${postId}`;
    const token = getFromLocalStorage("accessToken");

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": noroffKey,
      },
      body: JSON.stringify(post),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || "Post not created");
    }
    return data;
  } catch (error) {
    console.error(error);
    displayMessage("#create-message", "error", error.message);
    setTimeout(() => {
      const message = document.querySelector("#create-message");
      message.innerHTML = "";
    }, 2000);
  }
}
