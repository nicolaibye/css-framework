/**
 * Adding a key value pair to the local storage
 * @param {string} key Key to be added
 * @param {*} value Value to be added
 * @example
 * ```js
 * // Adding a key value pair to the local storage
 * const key = "myKey";
 * const value = "myValue";
 * addToLocalStorage(key, value);
 * // expect localStorage.getItem("myKey") to return "myValue"
 * ```
 */
export function addToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
