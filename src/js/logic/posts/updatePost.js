import { updatePostApi } from "/src/js/data/posts/updatePostApi.js";
import { displayMessage } from "/src/js/present/common/displayMessage.js";

export function updatePost(postId) {
  const observer = new MutationObserver((mutations, obs) => {
    const form = document.querySelector("#edit-post-form");
    if (form) {
      form.addEventListener("submit", (event) => submitForm(postId, event));
      obs.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

async function submitForm(postId, event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (data.tags) {
    data.tags = data.tags.split(",");
    data.tags = data.tags.map((tag) => tag.trim());
  } else {
    delete data.tags;
  }

  try {
    const response = await updatePostApi(postId, data);

    if (response.data && response.data.title) {
      displayMessage(
        "#create-message",
        "success",
        "Post updated! Reloading...",
      );
      setTimeout(() => {
        localStorage.removeItem("imageUrl");
        window.location.reload();
      }, 1000);
    } else {
      displayMessage("#create-message", "error", `${response.errors.message}`);
    }
  } catch (error) {
    console.error(error);
    displayMessage("#create-message", "error", error.message);
  }
}
