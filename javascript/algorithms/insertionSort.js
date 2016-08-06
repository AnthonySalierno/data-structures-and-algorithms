function insert(array, rightIndex, value) {
  let i;
  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
  return array;
}

console.log(insertionSort([1, 4, 2, 5, 3, 6]));
// [1, 2, 3, 4, 5, 6]
