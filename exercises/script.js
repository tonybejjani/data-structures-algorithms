/** @format */
'use default';

// 0 + 1 + 2 + 3 + 4

const testFunc = function (n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
};

// expected output: 10
