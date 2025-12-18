import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "src/login/index.html",
        register: "src/register/index.html",
        profile: "src/profile/index.html",
      },
    },
  },
});
