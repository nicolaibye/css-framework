import { baseUrl } from "/src/js/constants/api.js";
import { getFromLocalStorage } from "/src/js/helpers/getFromLocalStorage.js";
import { noroffKey } from "../../constants/api";
import { displayMessage } from "/src/js/present/common/displayMessage.js";

export async function fetchPosts() {
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
    const queryParams = "?_author=true";
    const respone = await fetch(
      `${baseUrl}social/posts${queryParams}`,
      options,
    );
    const data = await respone.json();
    if (!respone.ok) {
      throw new Error(
        data.errors?.[0]?.message || "Failed to fetch posts from API call",
      );
    }

    return data.data;
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
  }
}
