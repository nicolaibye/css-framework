export function userProfileBio(container, user) {
  let userContainer = container;
  if (typeof container === "string") {
    userContainer = document.querySelector(container);
  }

  userContainer.innerHTML = "";

  let { name, bio, avatar, _count } = user;

  if (!bio) {
    bio = "No bio available";
  }

  // Main Profile Container
  const profileContainer = document.createElement("div");
  profileContainer.classList.add(
    "flex",
    "flex-col",
    "gap-6",
    "items-center",
    "text-center",
  );

  // Header Flex Container
  const profileHeader = document.createElement("div");
  profileHeader.classList.add(
    "flex",
    "gap-9",
    "items-center",
    "font-normal",
    "text-base",
    "text-plum",
  );

  // Followers Section
  const followersDiv = document.createElement("div");
  followersDiv.classList.add("md:w-22", "w-auto");
  const followersText = document.createElement("p");
  followersText.classList.add("font-alegreya");
  followersText.textContent = "Followers";
  const followersNumber = document.createElement("p");
  followersNumber.classList.add("text-3xl", "font-normal", "font-aladin");
  followersNumber.textContent = _count.followers;

  followersDiv.append(followersText, followersNumber);

  // Profile Image
  const profileImage = document.createElement("img");
  profileImage.classList.add(
    "w-24",
    "h-24",
    "rounded-full",
    "object-cover",
    "object-top",
  );
  profileImage.src = avatar.url;
  profileImage.alt = `${name} profile picture`;

  // posts Section
  const postsDiv = document.createElement("div");
  postsDiv.classList.add("md:w-22", "w-auto");
  const postsText = document.createElement("p");
  postsText.classList.add("font-alegreya");
  postsText.textContent = "Posts";
  const postsNumber = document.createElement("p");
  postsNumber.classList.add("text-3xl", "font-normal", "font-aladin");
  postsNumber.textContent = _count.posts;

  postsDiv.append(postsText, postsNumber);

  // Append Follower, Image, and posts to Header
  profileHeader.append(followersDiv, profileImage, postsDiv);

  // Profile Bio Container
  const bioContainer = document.createElement("div");
  bioContainer.classList.add("flex", "flex-col", "gap-2", "items-center");

  const usernameHeading = document.createElement("h2");
  usernameHeading.classList.add("font-averia");
  usernameHeading.textContent = name;

  const bioText = document.createElement("p");
  bioText.classList.add("text-sm");
  bioText.textContent = bio;

  bioContainer.append(usernameHeading, bioText);

  // Button Container
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center",
  );
  buttonContainer.id = "profile-btn-container";

  const followBtn = document.createElement("button");
  followBtn.classList.add(
    "profile-btn",
    "my-1",
    "md:my-0",
    "md:mx-1",
    "w-40",
    "md:w-fit",
  );
  followBtn.id = "follow-btn";
  followBtn.textContent = "Follow";
  const messageBtn = document.createElement("button");
  messageBtn.classList.add(
    "profile-btn",
    "my-1",
    "md:my-0",
    "md:mx-1",
    "w-40",
    "md:w-fit",
  );
  messageBtn.id = "message-btn";
  messageBtn.textContent = "Message";

  const shareBtn = document.createElement("button");
  shareBtn.classList.add(
    "profile-btn",
    "my-1",
    "md:my-0",
    "md:mx-1",
    "w-40",
    "md:w-fit",
  );
  shareBtn.id = "share-btn";
  shareBtn.textContent = "Share";

  const moreBtn = document.createElement("button");
  moreBtn.classList.add(
    "profile-btn",
    "my-1",
    "md:my-0",
    "md:mx-1",
    "w-40",
    "md:w-fit",
  );
  moreBtn.id = "more-btn";
  moreBtn.textContent = "...";

  buttonContainer.append(followBtn, messageBtn, shareBtn, moreBtn);

  // Append all to Profile Container
  profileContainer.append(profileHeader, bioContainer, buttonContainer);

  userContainer.append(profileContainer);
}
