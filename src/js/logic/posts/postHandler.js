import { fetchPosts } from "/src/js/data/posts/fetchPosts.js";
import { createPosts } from "/src/js/present/posts/createPosts.js";
import { searchFeedResults } from "/src/js/logic/posts/searchFeedResults.js";
import { displayMessage } from "/src/js/present/common/displayMessage.js";

export async function postHandler(containerId) {
  try {
    const container = document.getElementById(containerId);
    const posts = await fetchPosts();
    const dropdownIcon = document.querySelector("#dropdown-icon");

    createPosts(container, posts);
    dropdownIcon.addEventListener("click", () => {
      searchFeedResults(container, posts);
    });
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
  }
}
