import { fetchUserProfile } from "/src/js/data/auth/fetchUserProfile.js";
import { fetchUserPosts } from "/src/js/data/posts/fetchUserPosts.js";
import { displayMessage } from "/src/js/present/common/displayMessage.js";
import { createPosts } from "/src/js/present/posts/createPosts.js";
import { userProfileBio } from "/src/js/present/profile/userProfileBio.js";
import { searchFeedResults } from "/src/js/logic/posts/searchFeedResults.js";
import { getFromLocalStorage } from "/src/js/helpers/getFromLocalStorage.js";
import { postAdmin } from "/src/js/logic/posts/postAdmin.js";
import { userProfileAdmin } from "/src/js/logic/profile/userProfileAdmin.js";
import { followHandler } from "/src/js/logic/profile/followHandler.js";

export async function profileHandler() {
  // get username from url

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get("user");
  const dropdownIcon = document.querySelector("#dropdown-icon");
  // if username is missing, redirect to home
  if (!username) {
    window.location.href = "/";
  }

  try {
    // fetch user profile
    const user = await fetchUserProfile(username);
    userProfileBio("#profile-bio", user);
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
  }

  try {
    // fetch user posts
    const userPosts = await fetchUserPosts(username);
    createPosts("#profile-feed-grid", userPosts);
    dropdownIcon.addEventListener("click", () => {
      searchFeedResults("#profile-feed-grid", userPosts);
    });
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
  }

  // check if user is logged in
  // display own profile with edit and delete buttons
  const loggedIn = getFromLocalStorage("name");
  if (username === loggedIn) {
    // Display user logged in profile and edit posts
    userProfileAdmin();
    postAdmin();
  } else {
    // Display user profile and posts
    followHandler();
  }

  //Follow / unfollow function that goes unto the Follow button created in userProfileBio
}
