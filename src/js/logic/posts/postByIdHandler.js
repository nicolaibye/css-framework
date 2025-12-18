import { displayMessage } from "../../present/common/displayMessage.js";
import { singlePostById } from "../../present/posts/singlePostById.js";
import { fetchPostById } from "../../data/posts/fetchPostById.js";

export async function postByIdHandler() {
  try {
    // Event listener is interfering with create event listener, figure out a solution bucko.
    document.addEventListener("click", async (event) => {
      const postId = event.target.id;
      if (event.target.classList.contains("read-more-btn")) {
        const post = await fetchPostById(postId);
        singlePostById(post, postId);
      }

      const popup = document.querySelector(`#post-overlay-${postId}`);
      if (
        popup &&
        !popup.contains(event.target) &&
        !event.target.classList.contains("read-more-btn")
      ) {
        popup.remove();
      }
    });
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
  }
}
