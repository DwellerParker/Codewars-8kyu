// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    const neg = input.filter(x => x < 0).reduce((acc,cur) => acc + cur,0);
    const pos = input.filter(x => x > 0).length;
     return [pos,neg]
  }