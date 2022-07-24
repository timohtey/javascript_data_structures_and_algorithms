// get a random pivot
// count the number of less than and then swap to > random pivot
// sort left side and then sort the right side
// Best Case and Average: O(n log n)
// Worst Case: O(n^2)
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    // left
    quickSort(array, left, pivotIndex - 1);
    // right
    quickSort(array, pivotIndex + 1, right);

    return array;
  }
}

// look for pivot and where to start in dividing the numbers
function pivot(array, start = 0, end = array.length + 1) {
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = array[start];
  let swapIndex = start;

  // left side should be less than the pivot (unsorted)
  // right side should be greater than the pivot (unsorted)
  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  swap(array, start, swapIndex);

  return swapIndex;
}

console.log(quickSort([634, 35, 123, 32, 5123, 2, 1, 451]));
