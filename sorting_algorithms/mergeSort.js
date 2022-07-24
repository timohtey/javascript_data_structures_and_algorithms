// all cases O(n log n)
function merge(array1, array2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }

  // results + remaining
  return [...results, ...array1.slice(i), ...array2.slice(j)];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, mid));
  const rightHalf = mergeSort(array.slice(mid));
  return merge(leftHalf, rightHalf);
}

console.log(mergeSort([24, 5123, 123, 32, 64, 2, 1, 451]));
