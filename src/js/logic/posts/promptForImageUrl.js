import { addToLocalStorage } from "../../helpers/addToLocalStorage.js";
import { isValidImageUrl } from "../../helpers/isValidImageUrl.js";

export function promptForImageUrl() {
  const imageUrl = prompt("Enter your image URL (http:// or https://):");
  const imageContainer = document.querySelector("#create-post-picture");

  if (isValidImageUrl(imageUrl)) {
    addToLocalStorage("imageUrl", imageUrl);
    imageContainer.src = imageUrl;
  } else {
    alert(
      "Please provide a valid image URL following the protocol (http:// or https://).",
    );
  }
}
