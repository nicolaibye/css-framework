import { submitCreateForm } from "/src/js/helpers/submitCreateForm.js";
import { promptForImageUrl } from "/src/js/logic/posts/promptForImageUrl.js";

export function createPostOverlay() {
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
  overlay.id = "create-post-container";
  overlay.innerHTML = `
            <article id="create-message">
            </article>
            <div class="relative flex flex-col h-full md:h-100 md:grid md:grid-cols-post2">
            <button class="cancle-post-btn btn absolute top-4 left-4 px-3 py-2" id="cancel-post-btn">X</button>
            <button class="post-edit-picture-btn btn absolute top-4 right-4 md:top-44 md:left-20" id="create-post-picture-btn">Choose picture</button>
            <img class="w-auto h-1/4 md:w-80 md:h-100 border-2 border-plum md:rounded-l-2xl object-cover object-top" src="/img-placeholder.jpg" alt="Post picture" id="create-post-picture">
            <div class="text-offWhite flex flex-col justify-between bg-plum px-6 pt-4 pb-6 rounded-r-2xl md:h-100 h-full">
                <form class="edit-form flex flex-col gap-2" id="create-post-form">
                    <label class="font-light font-averia" for="title">Title:</label>
                    <input class="mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" type="text" name="title" id="title" required>
                    <label class="font-light font-averia" for="body">Description:</label>
                    <textarea class="resize-none h-24 mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" name="body" id="body"></textarea required>
                    <label class="font-light font-averia" for="tags">Tags (Separate with a comma):</label>
                    <input class="mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" type="text" name="tags" id="tags">
                    <input type="submit" value="Create" id="create-submit" class="overlay-post-btn btn">
                </form>
            </div>
        </div>
    `;

  document.body.appendChild(overlay);

  const cancelPostBtn = overlay.querySelector("#cancel-post-btn");
  const imageButton = overlay.querySelector("#create-post-picture-btn");
  const form = overlay.querySelector("#create-post-form");

  cancelPostBtn.addEventListener("click", () => {
    overlay.remove();
    localStorage.removeItem("imageUrl");
  });

  imageButton.addEventListener("click", () => {
    promptForImageUrl();
  });

  form.addEventListener("submit", submitCreateForm);
}
