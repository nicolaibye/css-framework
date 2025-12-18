/**
 * Checking if the provided key exists in the local storage and returning its value if it does
 * @param {string} key Key to get from local storage
 * @returns {*} Value of the key in the local storage
 * @example
 * ```js
 * // Getting a key value pair from the local storage
 * const key = "myKey";
 * const value = getFromLocalStorage(key);
 * // expect value to be the value of the key in the local storage
 * ```
 */
export function getFromLocalStorage(key) {
  if (!key) {
    throw new Error("Missing key");
  }
  return localStorage.getItem(key);
}
