import { baseUrl, noroffKey } from "/src/js/constants/api.js";
import { getFromLocalStorage } from "/src/js/helpers/getFromLocalStorage.js";
import { displayMessage } from "/src/js/present/common/displayMessage.js";

export async function followToggleApi(action) {
  const urlParams = window.location.search;
  const queryParams = new URLSearchParams(urlParams);
  const user = queryParams.get("user");
  const token = getFromLocalStorage("accessToken");
  try {
    const response = await fetch(
      `${baseUrl}social/profiles/${user}/${action}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": noroffKey,
        },
      },
    );
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
