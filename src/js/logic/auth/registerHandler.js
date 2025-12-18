import { displayMessage } from "/src/js/present/common/displayMessage.js";
import { registerApiCall } from "/src/js/data/auth/registerApiCall.js";
import { isValidImageUrl } from "../../helpers/isValidImageUrl";

export function registerHandler() {
  const form = document.getElementById("register-form");

  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (data.bio.trim() === "") {
    delete data.bio;
  }

  if (isValidImageUrl(data.avatarUrl.trim()) && data.avatarUrl.trim() !== "") {
    data.avatar = {
      url: data.avatarUrl,
      alt: `${data.name}'s profile picture`,
    };
  } else {
    delete data.avatarUrl;
  }

  try {
    await registerApiCall(data);
    displayMessage("#message", "success", "Registration successful!");
    setTimeout(() => {
      window.location.href = "/src/login/";
    }, 2000);
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
