// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

const array1 = ["apple", "banana", "cherry"];
doToElementsInArray(array1);

const array2 = ["antelope", "bear", "cat"];
doToElementsInArray(array2, changeCompletely);
