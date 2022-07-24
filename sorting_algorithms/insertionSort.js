// builds up the sort by gradually creating a larger
// left half which is always sorted
// Best Case: 0(n)
// Averate and Worst Case: O(n^2)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentVal = array[i];

    for (let j = i - 1; j >= 0 && currentVal < array[j]; j--) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }

  return array;
}

console.log(insertionSort([24, 5123, 123, 32, 64, 2, 1, 451]));
