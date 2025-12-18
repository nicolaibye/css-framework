/**
 * Checking if the provided URL is following the http:// or https:// protocol.
 * @param {string} url Url to be checked
 * @returns {boolean} True if the URL is following the http:// or https:// protocol, false otherwise
 * @example
 * ```js
 * // Takes a url string and returns a boolean value
 * const url = "https://example.com/image.jpg";
 * const isValid = isValidImageUrl(url);
 * // expect isValid to be true
 * ```
 */
export function isValidImageUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch (error) {
    console.error(error);
    window.alert("Please provide a valid image URL.");
    return false;
  }
}
