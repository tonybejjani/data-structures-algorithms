/** @format */

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nString = n.toString();
  let negativeNum = nString.includes('-');
  if (negativeNum) nString = nString.slice(1);

  let reversed = nString.split('').reduce((prev, curr, i) => {
    let next = nString[i + 1];
    if (next === '0' && !nString[i + 2]) {
      return prev;
    } else {
      return curr + prev;
    }
  });

  if (negativeNum) return Number(reversed) * -1;
  return Number(reversed);
}

module.exports = reverseInt;
