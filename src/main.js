import { registerHandler } from "./js/logic/auth/registerHandler.js";
import { loginHandler } from "./js/logic/auth/loginHandler.js";
import { postHandler } from "./js/logic/posts/postHandler.js";
import { navHandler } from "./js/logic/navHandler.js";
import { postByIdHandler } from "./js/logic/posts/postByIdHandler.js";
import { profileHandler } from "./js/logic/profile/profileHandler.js";
import "./style.css";

navHandler();

function router() {
  const pathname = window.location.pathname;
  switch (pathname) {
    case "/":
    case "/index.html":
      postHandler("feed-1");
      postByIdHandler();
      break;
    case "/src/login/":
    case "/src/login/index.html":
      loginHandler();
      break;
    case "/src/register/":
    case "/src/register/index.html":
      registerHandler();
      break;
    case "/src/profile/":
    case "/src/profile/index.html":
      profileHandler();
      postByIdHandler();
      break;
    case "/src/post/":
    case "/src/post/index.html":
      break;
    case "/src/edit/":
    case "/src/edit/index.html":
      break;
  }
}

router();
