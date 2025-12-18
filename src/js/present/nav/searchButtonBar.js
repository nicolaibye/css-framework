export function searchButtonBar() {
  const searchInput = document.querySelector("#search-input");
  const searchLabel = document.querySelector("#search-label");
  searchLabel.style.fontSize = "1rem";
  searchLabel.style.color = "rgba(42, 17, 75, 0.2)";
  searchLabel.style.paddingLeft = "10px";
  searchInput.style.display = "block";
  searchInput.style.opacity = "1";
  searchInput.focus();

  searchInput.addEventListener("blur", () => {
    searchLabel.style.fontSize = "1.125rem";
    searchLabel.style.color = "rgba(82, 41, 89, 1)";
    searchLabel.style.paddingLeft = "0px";
    searchInput.style.display = "none";
    searchInput.style.opacity = "0";
  });
}
