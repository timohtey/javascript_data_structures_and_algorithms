// Best Case: 0(n)
// Averate and Worst Case: O(n^2)
function bubbleSort(array) {
  let noSwaps;

  // Iterate so that as the outer loop grows,
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;

    // Inner loop lessens,
    for (let j = 0; j < i - 1; j++) {
      // Swap
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }

    // If no swaps happened, finish the sorting
    if (noSwaps) {
      break;
    }
  }

  return array;
}

console.log(bubbleSort([1, 5, 3, 2]));
