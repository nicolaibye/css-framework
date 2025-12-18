export async function singlePostById(post, id) {
  const { title, body, tags, media, author, created, _count, comments } = post;
  const commentsAmount = _count.comments || 0;
  const reactionsAmount = _count.reactions || 0;

  // Create main overlay container
  const overlayContainer = document.createElement("article");
  overlayContainer.classList.add(
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
  overlayContainer.id = `post-overlay-${id}`;

  // Create the main overlay content
  const overlayMain = document.createElement("div");
  overlayMain.classList.add(
    "post-overlay-main",
    "relative",
    "h-full",
    "md:h-fit",
    "md:grid",
    "md:grid-cols-post2",
    "flex",
    "flex-col",
    "z-40",
  );

  // Close button
  const closeButton = document.createElement("button");
  closeButton.classList.add(
    "post-overlay-close-btn",
    "btn",
    "absolute",
    "top-4",
    "left-4",
    "px-3",
    "py-2",
  );
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    overlayContainer.remove();
  });

  // Post image
  const postImage = document.createElement("img");
  postImage.classList.add(
    "md:w-80",
    "md:h-100",
    "hidden",
    "md:block",
    "border-2",
    "border-plum",
    "md:rounded-tl-2xl",
    "object-cover",
    "object-top",
  );
  postImage.src = media.url;
  postImage.alt = media.alt;

  // Info container
  const infoContainer = document.createElement("div");
  infoContainer.classList.add(
    "post-overlay-info-container",
    "text-offWhite",
    "flex",
    "flex-0-0-50",
    "md:h-full",
    "flex-col",
    "justify-between",
    "bg-plum",
    "md:p-6",
    "p-4",
    "pt-16",
    "md:rounded-tr-2xl",
  );

  // Post title
  const bioContainer = document.createElement("div");
  const postTitle = document.createElement("h2");
  postTitle.classList.add("font-averia", "text-2xl", "font-bold");
  postTitle.textContent = title;

  // Username and date
  const dateFormating = new Date(created);
  const createdFormated = dateFormating.toLocaleDateString();
  const postUser = document.createElement("a");
  postUser.href = `/src/profile/?user=${author.name}`;
  postUser.classList.add("mb-4", "text-base", "font-light", "font-averia");
  postUser.textContent = `@${author.name}, ${createdFormated}`;

  // Post description
  const postDescription = document.createElement("p");
  postDescription.classList.add(
    "post-overlay-description",
    "mb-4",
    "font-normal",
    "text-lg",
    "font-alegreya",
    "overflow-hidden",
    "overflow-y-scroll",
    "max-h-50",
  );
  postDescription.textContent = body;

  // Append post details
  bioContainer.append(postTitle, postUser, postDescription);

  // Tags section
  const tagsContainer = document.createElement("div");

  const tagsLabel = document.createElement("p");
  tagsLabel.classList.add("font-averia");
  tagsLabel.textContent = "Tags:";

  const tagsList = document.createElement("div");
  tagsList.classList.add("flex", "flex-wrap", "gap-2", "font-alegreya");

  tags.forEach((tag) => {
    const tagElement = document.createElement("p");
    tagElement.textContent = tag;
    tagElement.classList.add(
      "bg-offWhite",
      "text-night",
      "p-2",
      "mt-2",
      "text-sm",
    );
    tagsList.append(tagElement);
  });

  tagsContainer.append(tagsLabel, tagsList);
  infoContainer.append(bioContainer, tagsContainer);

  // Create the comments section
  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add(
    "md:w-160",
    "w-full",
    "flex",
    "flex-col",
    "flex-0-0-50",
    "h-full",
    "md:h-fit",
    "relative",
    "text-offWhite",
    "bg-gradient-to-b",
    "from-dusk",
    "via-dreams",
    "to-night",
    "md:rounded-b-2xl",
    "p-4",
    "z-10",
  );

  // Comments stats section
  const commentsStats = document.createElement("div");
  commentsStats.classList.add(
    "post-overlay-comments-stats",
    "flex",
    "items-center",
    "gap-2",
    "mb-4",
  );

  const heartIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  heartIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  heartIcon.setAttribute("width", "21");
  heartIcon.setAttribute("height", "20");
  heartIcon.setAttribute("viewBox", "0 0 21 20");
  heartIcon.setAttribute("fill", "none");

  const heartIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  heartIconPath.setAttribute(
    "d",
    "M10.8307 3.15112C10.6984 3.44588 10.3001 3.44588 10.1664 3.15112C7.67134 -2.38019 -0.606225 -0.331557 0.0353262 6.96835C0.553119 12.8504 4.31707 14.759 10.0469 19.8276C10.3073 20.0575 10.6927 20.0575 10.9531 19.8276C16.6829 14.759 20.4469 12.8504 20.9647 6.96835C21.6062 -0.331557 13.3287 -2.38019 10.8307 3.15112Z",
  );
  heartIconPath.setAttribute("fill", "#FFF5F0");

  heartIcon.appendChild(heartIconPath);

  const heartCount = document.createElement("p");
  heartCount.classList.add("mr-2", "font-aladin");
  heartCount.textContent = reactionsAmount;

  const commentIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  commentIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  commentIcon.setAttribute("width", "20");
  commentIcon.setAttribute("height", "20");
  commentIcon.setAttribute("viewBox", "0 0 20 20");
  commentIcon.setAttribute("fill", "none");

  const commentIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  commentIconPath.setAttribute(
    "d",
    "M19.9972 9.82194C20.1161 14.9191 16.4688 19.1826 11.658 19.9904C11.0878 20.0856 10.6729 19.4505 10.9878 18.9609C11.7094 17.8349 12.3634 16.1472 11.8621 14.6335C11.7013 14.148 11.0932 14.0025 10.7405 14.3697C6.67023 18.5978 0 15.8752 0 10.064C0 4.25286 4.60808 -0.130317 10.2405 0.00295967C15.5458 0.128077 19.8715 4.4827 19.9958 9.82058L19.9972 9.82194Z",
  );
  commentIconPath.setAttribute("fill", "#FFF5F0");

  commentIcon.appendChild(commentIconPath);

  const commentCount = document.createElement("p");
  commentCount.classList.add("font-aladin");
  commentCount.textContent = commentsAmount;

  commentsStats.append(heartIcon, heartCount, commentIcon, commentCount);

  // Comments list
  const commentsList = document.createElement("ul");
  commentsList.classList.add(
    "post-overlay-comments-list",
    "flex",
    "flex-col",
    "gap-4",
    "mb-4",
    "overflow-y-auto",
    "overflow-y-scroll",
    "md:h-36",
    "md:mb-16",
    "flex-grow",
    "max-h-calcComment",
  );

  const commentsData = comments || [];

  commentsData.forEach((comment) => {
    const commentItem = document.createElement("li");
    commentItem.classList.add("flex", "gap-3.5");
    const commentImg = document.createElement("img");
    commentImg.classList.add(
      "w-8",
      "h-8",
      "rounded-full",
      "object-cover",
      "border-none",
    );
    commentImg.src = comment.author.avatar.url;
    commentImg.alt = comment.author.avatar.alt;

    const commentText = document.createElement("p");
    commentText.classList.add("font-alegreya", "font-normal", "max-w-lg");
    commentText.textContent = comment.body;
    commentItem.append(commentImg, commentText);
    commentsList.append(commentItem);
  });

  // Comment form
  const commentForm = document.createElement("form");
  commentForm.classList.add(
    "post-overlay-comment-form",
    "grid",
    "grid-cols-commentSubmit",
    "gap-2",
    "absolute",
    "bottom-4",
    "w-headerCalc",
    "mt-auto",
  );

  const commentInput = document.createElement("input");
  commentInput.classList.add(
    "border-2",
    "border-offWhite",
    "rounded-lg",
    "p-2",
    "bg-transparent",
    "text-offWhite",
    "font-alegreya",
    "font-medium",
    "text-sm",
  );
  commentInput.type = "text";
  commentInput.name = "comment";
  commentInput.id = "comment";

  const commentSubmit = document.createElement("input");
  commentSubmit.classList.add(
    "border-2",
    "border-offWhite",
    "rounded-lg",
    "p-2",
    "bg-offWhite",
    "text-night",
    "md:bg-transparent",
    "md:text-offWhite",
    "font-alegreya",
    "font-medium",
    "hover:bg-offWhite",
    "hover:text-night",
    "hover:cursor-pointer",
    "transition-all",
    "duration-200",
    "ease-in-out",
  );
  commentSubmit.type = "submit";
  commentSubmit.value = "Comment";
  commentSubmit.id = "submit-comment";

  commentForm.append(commentInput, commentSubmit);
  commentsContainer.append(commentsStats, commentsList, commentForm);
  overlayMain.append(closeButton, postImage, infoContainer, commentsContainer);
  overlayContainer.append(overlayMain);
  document.body.append(overlayContainer);
}
