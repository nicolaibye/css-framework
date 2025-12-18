import { updateProfileApi } from "/src/js/data/profile/updateProfileApi.js";
import { displayMessage } from "/src/js/present/common/displayMessage.js";

export function updateProfile() {
  const urlParams = window.location.search;
  const queryParams = new URLSearchParams(urlParams);
  const user = queryParams.get("user");
  const observer = new MutationObserver((mutations, obs) => {
    const form = document.querySelector("#edit-user-form");
    if (form) {
      form.addEventListener("submit", (event) => submitForm(user, event));
      obs.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

async function submitForm(user, event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    bio: formData.get("bio"),
    avatar: {
      url: formData.get("url"),
      alt: `${user}'s profile picture`,
    },
  };
  try {
    const response = await updateProfileApi(user, data);

    if (response) {
      displayMessage(
        "#create-message",
        "success",
        "Profile updated! Reloading...",
      );
      setTimeout(() => {
        localStorage.removeItem("imageUrl");
        window.location.reload();
      }, 1000);
    }
  } catch (error) {
    console.error(error);
    displayMessage("#create-message", "error", error.message);
  }
}
