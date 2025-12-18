import { getFromLocalStorage } from "/src/js/helpers/getFromLocalStorage.js";
import { displayMessage } from "/src/js/present/common/displayMessage.js";
import { createNewPostApi } from "/src/js/data/posts/createNewPostApi.js";

export async function submitCreateForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const imageUrl = getFromLocalStorage("imageUrl");

  if (data.tags) {
    data.tags = data.tags.split(",");
    data.tags = data.tags.map((tag) => tag.trim());
  } else {
    delete data.tags;
  }

  if (imageUrl) {
    data.media = {
      url: imageUrl,
      alt: `${data.title} picture`,
    };
  }

  if (data.media === undefined || data.media === null || data.media === "") {
    displayMessage("#create-message", "error", "Please choose an image");
    return;
  }

  try {
    const response = await createNewPostApi(data);

    if (response.data && response.data.title) {
      displayMessage(
        "#create-message",
        "success",
        "Post created! Reloading...",
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
