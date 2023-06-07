function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const arrayCopy = array;
  const leftmostIndex = 1;
  const rightmostIndex = arrayCopy.length;

  if (leftmostIndex < rightmostIndex) {
    let mid;

    if (arrayCopy.length % 2 === 0) {
      mid = rightmostIndex / 2;
    } else {
      mid = Math.floor(rightmostIndex / 2);
    }

    const leftArray = mergeSort(arrayCopy.slice(leftmostIndex - 1, mid));
    const rightArray = mergeSort(arrayCopy.slice(mid + 1 - 1, rightmostIndex));
    const sortedList = merge(leftArray, rightArray);
    return sortedList;
  }
}

function merge(leftArray, rightArray) {
  const mergedArray = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (
    leftPointer <= leftArray.length - 1 &&
    rightPointer <= rightArray.length - 1
  ) {
    const leftElement = leftArray[leftPointer];
    const rightElement = rightArray[rightPointer];

    if (leftElement <= rightElement) {
      mergedArray.push(leftElement);
      leftPointer++;
    } else {
      mergedArray.push(rightElement);
      rightPointer++;
    }
  }

  for (leftPointer; leftPointer <= leftArray.length - 1; leftPointer++) {
    mergedArray.push(leftArray[leftPointer]);
  }
  for (rightPointer; rightPointer <= rightArray.length - 1; rightPointer++) {
    mergedArray.push(rightArray[rightPointer]);
  }

  return mergedArray;
}

console.log("empty:", mergeSort([]));
console.log("small odd", mergeSort([1]));
console.log("small even:", mergeSort([2, 1]));
console.log("odd:", mergeSort([400, 241, 214, 275, 783]));
console.log("even:", mergeSort([109, 912, 336, 699, 370, 911, 187, 910]));
