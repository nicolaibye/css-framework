import { fetchUserDetails } from "/src/js/data/profile/fetchUserDetails.js";

export async function editProfileOverlay() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get("user");
  const nameData = await fetchUserDetails(username);
  let { bio, avatar } = nameData;

  if (!bio) {
    bio = "";
  }

  const overlay = document.createElement("article");
  overlay.classList.add(
    "post-overlay-container",
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "flex",
    "md:justify-center",
    "md:items-center",
    "flex-col",
    "z-30",
    "bg-black",
    "bg-opacity-50",
  );
  overlay.id = "edit-user-container";
  overlay.innerHTML = `
                  <article id="create-message">
                  </article>
                  <div class="relative flex flex-col h-full md:h-100 md:grid md:grid-cols-post2">
                  <button class="cancle-post-btn btn absolute top-4 left-4 px-3 py-2" id="cancel-post-btn">X</button>
                    <img class="w-auto h-1/4 md:w-80 md:h-100 border-2 border-plum md:rounded-l-2xl object-cover object-top" src="${avatar.url}" alt="${avatar.alt}" id="edit-user-picture">
                  <div class="text-offWhite flex flex-col justify-between bg-plum px-6 pt-4 pb-6 rounded-r-2xl md:h-none h-full">
                      <form class="edit-form flex flex-col gap-2" id="edit-user-form">
                          <label for="avatar">Avatar (URL):</label>
                          <input class="mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" type="text" name="url" id="avatar-url" pattern="https?://.*" title="Please use a valid URL" value="${avatar.url}">
                          <label for="bio">Bio:</label>
                          <textarea class="resize-none h-24 mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" name="bio" id="bio">${bio}</textarea>
                          <input type="submit" value="Update" class="overlay-post-btn btn">
                      </form>
                  </div>
              </div>
          `;
  document.body.appendChild(overlay);
  const cancelPostBtn = document.querySelector("#cancel-post-btn");
  const editUserContainer = document.querySelector("#edit-user-container");

  cancelPostBtn.addEventListener("click", () => {
    editUserContainer.remove();
  });
}
