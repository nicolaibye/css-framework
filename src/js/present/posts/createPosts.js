import { displayMessage } from "/src/js/present/common/displayMessage.js";
import { getFromLocalStorage } from "/src/js/helpers/getFromLocalStorage.js";

export function createPosts(container, posts) {
  let postsContainer = container;
  if (typeof container === "string") {
    postsContainer = document.querySelector(container);
  }

  const accessToken = getFromLocalStorage("accessToken");

  if (!accessToken) {
    displayMessage(
      postsContainer,
      "warning",
      "You are not logged in, please log in to see posts",
    );
    return;
  }

  if (!posts || posts === undefined || posts.length === 0) {
    displayMessage(
      postsContainer,
      "warning",
      "No posts to show, feel free to create one!",
    );
    return;
  }

  postsContainer.innerHTML = "";

  let postsArray = posts;
  let postsWithMedia = postsArray.filter(
    (post) => post.media && post.media.url,
  );

  postsWithMedia.forEach((post) => {
    const {
      id,
      body,
      created,
      author,
      media = { url, alt },
      title,
      _count = { comments, reactions },
    } = post;

    const url = media?.url || "https://i.sstatic.net/y9DpT.jpg";
    const alt = media?.alt || "Image";
    const comments = _count.comments || 0;
    const reactions = _count.reactions || 0;

    const listElement = document.createElement("li");
    listElement.classList.add(
      "group",
      "relative",
      "w-full",
      "h-auto",
      "xs:w-80",
      "xs:h-100",
      "border-2",
      "border-plum",
      "rounded-xl",
      "drop-shadow-md",
      "mb-4",
      "lg:hover:scale-105",
      "transition-all",
      "duration-200",
      "ease-in-out",
    );

    const postCardMain = document.createElement("div");
    postCardMain.classList.add("min-h-99", "md:min-h-none");

    const postCardImage = document.createElement("img");
    postCardImage.classList.add(
      "w-full",
      "h-99",
      "object-cover",
      "object-top",
      "rounded-xl",
    );
    postCardImage.src = url;
    postCardImage.alt = alt;

    const postCardIcons = document.createElement("div");
    postCardIcons.classList.add(
      "absolute",
      "bottom-4",
      "left-4",
      "flex",
      "items-center",
      "color-offWhite",
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
    heartIcon.setAttribute("class", "mr-2");

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

    const heartIconText = document.createElement("p");
    heartIconText.classList.add("text-offWhite", "mr-4", "font-aladin");
    heartIconText.textContent = reactions;

    const commentIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    commentIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    commentIcon.setAttribute("width", "20");
    commentIcon.setAttribute("height", "20");
    commentIcon.setAttribute("viewBox", "0 0 20 20");
    commentIcon.setAttribute("fill", "none");
    commentIcon.setAttribute("class", "mr-2");

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

    const usernameElement = document.createElement("a");
    usernameElement.classList.add(
      "text-offWhite",
      "absolute",
      "right-4",
      "bottom-4",
      "font-averia",
    );
    usernameElement.textContent = author.name;

    const commentIconText = document.createElement("p");
    commentIconText.classList.add("text-offWhite", "font-aladin");
    commentIconText.textContent = comments;

    const postCardBio = document.createElement("div");
    postCardBio.classList.add(
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "rounded-xl",
      "p-6",
      "text-offWhite",
      "bg-[rgba(130,77,105,0.75)]",
      "backdrop-blur",
      "opacity-0",
      "transition-opacity",
      "duration-300",
      "ease-in-out",
      "hover:opacity-100",
    );

    const postCardBioFlexContainer = document.createElement("div");
    postCardBioFlexContainer.classList.add(
      "relative",
      "flex",
      "flex-col",
      "h-full",
      "justify-center",
    );

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "delete-btn",
      "hidden",
      "absolute",
      "top-0",
      "left-0",
      "btn",
    );
    deleteButton.id = `d-${id}`;
    deleteButton.textContent = "Delete";

    const editButton = document.createElement("button");
    editButton.classList.add(
      "edit-btn",
      "hidden",
      "absolute",
      "top-0",
      "right-0",
      "btn",
    );
    editButton.id = `e-${id}`;
    editButton.textContent = "Edit";

    const postTitle = document.createElement("h2");
    postTitle.classList.add("font-averia", "text-2xl", "font-bold");
    postTitle.textContent = title;

    const dateFormating = new Date(created);
    const createdFormated = dateFormating.toLocaleDateString();
    const postBioCreated = document.createElement("a");
    postBioCreated.href = `/src/profile/?user=${author.name}`;
    postBioCreated.classList.add(
      "mb-4",
      "text-base",
      "font-light",
      "font-averia",
    );
    postBioCreated.textContent = `@${author.name}, ${createdFormated}`;

    const postBody = document.createElement("p");
    postBody.classList.add("mb-4", "font-normal", "text-lg", "font-alegreya");
    postBody.textContent = body;

    const postButton = document.createElement("button");
    postButton.classList.add("read-more-btn", "btn");
    postButton.id = `${id}`;
    postButton.textContent = "Read more";

    postCardBioFlexContainer.append(
      postTitle,
      postBioCreated,
      postBody,
      postButton,
      deleteButton,
      editButton,
    );
    postCardBio.append(postCardBioFlexContainer);
    postCardIcons.append(
      heartIcon,
      heartIconText,
      commentIcon,
      commentIconText,
    );
    postCardMain.append(postCardImage, postCardIcons, usernameElement);
    listElement.append(postCardMain, postCardBio);
    postsContainer.append(listElement);
  });
}
