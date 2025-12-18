import { fetchPostById } from "/src/js/data/posts/fetchPostById.js";

export async function editPostOverlay(postId) {
  const postData = await fetchPostById(postId);
  const { title, body, tags, media } = postData;
  const tagString = tags.join(", ");

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
  overlay.id = "edit-post-container";
  overlay.innerHTML = `
              <article id="create-message">
              </article>
              <div class="post-overlay-main relative flex flex-col h-full md:h-100 md:grid md:grid-cols-post2">
              <button class="cancle-post-btn btn absolute top-4 left-4 px-3 py-2" id="cancel-post-btn">X</button>
              <img class="w-auto h-1/4 md:w-80 md:h-100 border-2 border-plum md:rounded-l-2xl object-cover object-top" src="${media.url}" alt="${media.alt}" id="edit-post-picture">
              <div class="text-offWhite flex flex-col justify-between bg-plum px-6 pt-4 pb-6 rounded-r-2xl md:h-100 h-full">
                  <form class="edit-form flex flex-col gap-2" id="edit-post-form">
                      <label for="title">Title:</label>
                      <input class="mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" type="text" name="title" id="title" value="${title}" required>
                      <label for="body">Description:</label>
                      <textarea class="resize-none h-24 mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" name="body" id="body" required>${body}</textarea>
                      <label for="tags">Tags (Separate with a comma):</label>
                      <input class="mb-2 border-2 border-offWhite rounded-md p-1 bg-plum text-offWhite text-base font-normal focus:outline-offWhite" type="text" name="tags" id="tags" value="${tagString}">
                      <input type="submit" value="Update" class="overlay-post-btn btn">
                  </form>
              </div>
          </div>
      `;
  document.body.appendChild(overlay);
  const cancelPostBtn = document.querySelector("#cancel-post-btn");
  const createEditContainer = document.querySelector("#edit-post-container");

  cancelPostBtn.addEventListener("click", () => {
    createEditContainer.remove();
  });
}
