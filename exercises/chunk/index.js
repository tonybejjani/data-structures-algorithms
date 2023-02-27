/** @format */

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  if (size >= arr.length) return arr;

  const chunked = [];
  const arrCopy = arr.map((el) => el);
  const remainder = arr.length % size;
  const loopCount = (arr.length - remainder) / size;

  for (let i = 0; i < loopCount; i++) {
    let chunk = arrCopy.splice(0, size);
    chunked.push(chunk);
    debugger;
  }

  if (remainder !== 0) {
    chunked.push(arrCopy);
  }

  return chunked;
}

chunk([1, 2, 3, 4, 5], 2);

module.exports = chunk;
