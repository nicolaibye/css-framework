import { displayMessage } from "/src/js/present/common/displayMessage.js";
import { loginApiCall } from "/src/js/data/auth/loginApiCall.js";

export function loginHandler() {
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  try {
    await loginApiCall(data);
    displayMessage(
      "#message",
      "success",
      "Login successful! Redirecting to home page...",
    );
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
}
