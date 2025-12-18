export function displayMessage(container, messageType, message) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  parent.innerHTML = `<p class="message ${messageType} alegreya">${message}</p>`;
}
