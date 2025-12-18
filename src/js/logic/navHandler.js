import { createNavContent } from "/src/js/present/nav/createNavContent.js";

const dropdownIcon = document.querySelector("#dropdown-icon");

export function navHandler() {
  dropdownIcon.addEventListener("click", () => {
    createNavContent();
  });
}
