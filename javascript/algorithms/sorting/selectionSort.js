function selectionSort(array) {
  const length = array.length;
  let counter = 0;
  for (let i = 0; i < length; i++) {
    let indexOfMinValue = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[indexOfMinValue]) {
        indexOfMinValue = j;
      }
    }
    if (indexOfMinValue !== i) {
      const temp = array[indexOfMinValue];
      array[indexOfMinValue] = array[i];
      array[i] = temp;
    }
  }
  return array;
}

exports.selectionSort = selectionSort;
