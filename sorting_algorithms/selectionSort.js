// Best, Average and Worst Case: O(n^2)
// look for the minimum and put it at the start of the array
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimumNumberIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      // Retrieve minimum index
      if (array[minimumNumberIndex] > array[j]) {
        minimumNumberIndex = j;
      }
    }

    // Swap
    if (minimumNumberIndex != i) {
      const temp = array[i];
      array[i] = array[minimumNumberIndex];
      array[minimumNumberIndex] = temp;
    }
  }

  return array;
}

console.log(selectionSort([100, 2, 3, 12, 451, 23, 52]));
