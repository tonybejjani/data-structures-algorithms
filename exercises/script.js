/** @format */
'use default';

// 0 + 1 + 2 + 3 + 4

const arr = [1, 2, 3];
const size = 1;

const chunk = function (arr, size) {
  if (size >= arr.length) return [arr];

  const chunkedArr = [];
  const arrCopy = arr.map((el) => el);
  const remainder = arr.length % size;

  for (let i = 0; i < (arr.length - remainder) / size; i++) {
    chunkedArr.push(arrCopy.splice(0, size));
  }

  if (remainder !== 0) {
    chunkedArr.push(arrCopy);
  }

  return [chunkedArr];
};

const result = chunk(arr, size);

console.log(result);

// console.log(newArr);
