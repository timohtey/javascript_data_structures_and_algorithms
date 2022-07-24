// get digit based on the exponent
function getDigit(num, exponent) {
  return Math.floor(num / Math.pow(10, exponent)) % 10;
}

// Get digit count
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

// Get most number of digits
function mostDigits(arr) {
  let mostDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    const count = digitCount(arr[i]);

    if (mostDigits < count) {
      mostDigits = count;
    }
  }

  return mostDigits;
}

// Best, Average, and Worst: O(nk) -> n = length, k = number of digits
function radixSort(array) {
  // Get the most number of digits
  const maxNumOfDigits = mostDigits(array);

  for (let k = 0; k < maxNumOfDigits; k++) {
    // Create a bucket to base of 10
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      const digit = getDigit(num, k);
      // Sort it based on its digit
      buckets[digit].push(num);
    }

    // return it so that the sub-arrays are concatenated
    array = buckets.flat();
  }

  return array;
}

console.log(radixSort([4123, 1, 2, 23, 300, 41233]));
