import { baseUrl } from "/src/js/constants/api.js";
import { getFromLocalStorage } from "/src/js/helpers/getFromLocalStorage.js";
import { noroffKey } from "/src/js/constants/api.js";
import { displayMessage } from "/src/js/present/common/displayMessage.js";

export async function deletePost(id) {
  const postId = id;
  try {
    const response = await fetch(`${baseUrl}social/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getFromLocalStorage("accessToken")}`,
        "X-Noroff-API-Key": noroffKey,
      },
    });
    if (response.ok) {
      location.reload();
    } else {
      throw new Error("Failed to delete post");
    }
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
  }
}
