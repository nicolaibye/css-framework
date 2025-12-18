import { fetchUserDetails } from "../../data/profile/fetchUserDetails";
import { displayMessage } from "../../present/common/displayMessage";
import { followToggleApi } from "/src/js/data/profile/followToggleApi.js";

export async function followHandler() {
  // API call for user data
  try {
    const userName = localStorage.getItem("name");
    const userData = await fetchUserDetails(userName, "?_following=true");
    const following = userData.following;
    const followingNames = following.map((name) => name.name);

    // Check if you are following current user
    const urlParams = window.location.search;
    const queryParams = new URLSearchParams(urlParams);
    const user = queryParams.get("user");

    const followButton = document.querySelector("#follow-btn");
    if (followingNames.includes(user)) {
      // Display unfollow
      followButton.textContent = "Unfollow";
      followButton.style.color = "#fff5f0";
      followButton.style.backgroundColor = "#522959";
    } else {
      // Display follow
      followButton.textContent = "Follow";
    }

    followButton.addEventListener("click", () => {
      if (followingNames.includes(user)) {
        // API call to start following
        followToggleApi("unfollow");
      } else {
        // API call to stop following
        followToggleApi("follow");
      }
    });
  } catch (error) {
    console.error(error);
    displayMessage("#message", "error", error.message);
  }
}
