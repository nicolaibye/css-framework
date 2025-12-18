import { deletePost } from "/src/js/data/posts/deletePost.js";
import { editPostOverlay } from "/src/js/present/posts/editPostOverlay.js";
import { updatePost } from "/src/js/logic/posts/updatePost.js";

export function postAdmin() {
  const editBtns = document.querySelectorAll(".edit-btn");
  const deleteBtns = document.querySelectorAll(".delete-btn");
  editBtns.forEach((btn) => {
    btn.style.display = "block";
    btn.addEventListener("click", () => {
      const id = btn.id;
      const postId = id.replace(/\D/g, "");
      editPostOverlay(postId);
      updatePost(postId);
    });
  });
  deleteBtns.forEach((btn) => {
    btn.style.display = "block";
    btn.addEventListener("click", () => {
      const id = btn.id;
      const postId = id.replace(/\D/g, "");
      deletePost(postId);
    });
  });
}
