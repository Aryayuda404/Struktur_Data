// Tugas 1
const array = [1, 1, 2, 2, 2, 3, 3, 3, 3]
function countFrequency (arr){
  const object = {};
  arr.forEach(num => {
    object[num] = (object[num] || 0) + 1;
  });
  return object;
}
console.log(countFrequency(array))

// Tuags 2
const array2 = [1, 2, 2, 3, 3, 3, 4];
const frequency = {};
function uniqueElement(arr){
arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});
const result = Object.keys(frequency).filter(key => frequency[key] === 1).map(Number);
return result
}
console.log(uniqueElement(array2))

// Tugas 3
const arrayy1 = [7, 8, 9];
const arrayy2 = [7, 9, 10, 11];
function findSimilarity(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}
const similarity = findSimilarity(arrayy1, arrayy2);
console.log(similarity);
