function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "g"];

// console.log(containsCommonItem(arr1, arr2));

// arr1 => obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }

// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //   console.log(map);

  // loop through second array and check if item in second arraye exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem2(arr1, arr2));

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
