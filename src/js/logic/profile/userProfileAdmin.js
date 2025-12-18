import { editProfileOverlay } from "/src/js/present/profile/editProfileOverlay.js";
import { updateProfile } from "/src/js/logic/profile/updateProfile.js";

export function userProfileAdmin() {
  const buttonContainer = document.querySelector("#profile-btn-container");
  "mx-1", "w-32", "md:w-fit";
  buttonContainer.innerHTML = `<button class="profile-btn my-1 md:my-0 md:mx-1 w-40 md:w-fit" id="edit-profile-btn">Edit profile</button>
                <button class="profile-btn my-1 md:my-0 md:mx-1 w-40 md:w-fit">Archive</button>
                <button class="profile-btn my-1 md:my-0 md:mx-1 w-40 md:w-fit">...</button>`;

  const editProfileBtn = document.querySelector("#edit-profile-btn");
  editProfileBtn.addEventListener("click", () => {
    editProfileOverlay();
    updateProfile();
  });
}
