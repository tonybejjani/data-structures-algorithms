/** @format */

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let objStr = {};
  let maxChar = 0;
  let result = str[0];

  for (char of str) {
    if (objStr[char]) {
      objStr[char]++;

      if (objStr[char] > maxChar) {
        maxChar = objStr[char];
        result = char;
      }
    } else {
      objStr[char] = 1;
    }
  }

  return result;
}

maxChar('apple 1231111');

module.exports = maxChar;
