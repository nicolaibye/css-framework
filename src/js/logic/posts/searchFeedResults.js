import { createPosts } from "/src/js/present/posts/createPosts.js";

export function searchFeedResults(container, posts) {
  const searchInput = document.querySelector("#search-input");

  if (searchInput) {
    searchInput.addEventListener("input", handleFilter);
  }

  function handleFilter(event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredPosts = posts.filter((post) => {
      if (
        post.title.toLowerCase().startsWith(searchValue) ||
        post.title.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });
    createPosts(container, filteredPosts);
  }
}
