import { getFromLocalStorage } from "/src/js/helpers/getFromLocalStorage.js";
import { searchButtonBar } from "/src/js/present/nav/searchButtonBar.js";
import { createPostOverlay } from "/src/js/present/posts/createPostOverlay.js";

export function createNavContent() {
  const dropdown = document.querySelector("#dropdown");
  const dropdownIcon = document.querySelector("#dropdown-icon");
  const user = getFromLocalStorage("name");

  if (!dropdown.classList.contains("open")) {
    if (localStorage.getItem("accessToken")) {
      dropdown.innerHTML = `
            <ul class="mt-4 flex flex-col gap-1 font-semibold text-lg w-auto" id="nav-list">
                <li class="text-plum" id="home"><a href="/">Home</a></li>
                <li class="text-dusk relative" id="search-li">
                <label for="search" class="cursor-pointer transition-all duration-300" id="search-label">Search</label>
                <input name="search" type="text" class="hidden opacity-0 transition-opacity duration-500 absolute -top-0.5 h-8 w-full border-2 border-dusk rounded-md text-sm p-2 text-night bg-transparent caret-night focus:outline-none focus:border-2 focus:border-peach" id="search-input" autocomplete="off">
                </li>
                <li class="text-dreams" id="create"><a>Create</a></li>
                <li class="text-night flex justify-between items-center"><a id="profile" href="/src/profile/?user=${user}">Profile</a><i class="fa-solid fa-arrow-right-from-bracket text-night" id="logout"></i></li>
            </ul>
            <hr class="border-top-2 border-peach my-4 w-auto">
            <div class="flex flex-col gap-1 items-left font-normal w-auto text-sm">
                <a href="#">About us</a>
                <a href="#">Terms &amp; Policies</a>
                <p>© 2025 Ólos</p>
            </div>`;
    } else {
      dropdown.innerHTML = `
            <ul class="mt-4 flex flex-col gap-1 font-semibold text-lg w-auto" id="nav-list">
                <li class="text-plum" id="home"><a href="/">Home</a></li>
                <li class="text-dusk relative" id="search-li">
                <label for="search" class="cursor-pointer transition-all duration-300" id="search-label">Search</label>
                <input name="search" type="search" class="hidden opacity-0 transition-opacity duration-500 absolute -top-0.5 h-8 w-full border-2 border-dusk rounded-md text-sm p-2 text-night bg-transparent caret-night focus:outline-none focus:border-2 focus:border-peach" id="search-input" autocomplete="off">
                </li>
                <li class="text-night" id="login"><a href="/src/login/">Login</a></li>
            </ul>
            <hr class="border-top-2 border-peach my-4 w-auto">
            <div class="flex flex-col gap-1 items-left font-normal w-auto text-sm">
                <a href="#">About us</a>
                <a href="#">Terms &amp; Policies</a>
                <p>© 2025 Ólos</p>
            </div>`;
    }
    dropdown.style.maxHeight = "300px";
    dropdownIcon.style.transform = "rotate(-45deg)";
    dropdown.classList.add("open");
    dropdown.classList.remove("close");
  } else {
    dropdown.classList.remove("open");
    dropdown.classList.add("close");
    dropdown.style.maxHeight = "0px";
    dropdownIcon.style.transform = "rotate(0deg)";
    setTimeout(() => {
      while (dropdown.firstChild) {
        dropdown.removeChild(dropdown.firstChild);
      }
    }, 500);
  }

  if (user) {
    const logout = document.querySelector("#logout");
    const search = document.querySelector("#search-label");
    const create = document.querySelector("#create");

    create.addEventListener("click", () => {
      createPostOverlay();
    });
    search.addEventListener("click", () => {
      searchButtonBar();
    });
    logout.addEventListener("click", () => {
      localStorage.removeItem("accessToken");
      window.location.href = "/";
    });
  }
}
