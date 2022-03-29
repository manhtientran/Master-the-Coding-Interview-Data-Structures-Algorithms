// function mergeSortedArrays(arr1, arr2) {
//   if (arr1 === null && arr2 === null) {
//     return null;
//   }

//   const res = [];

//   let start1 = 0;
//   let start2 = 0;

//   while (start1 < arr1.length || start2 < arr2.length) {
//     if (start1 >= arr1.length) {
//       for (let i = start2; i < arr2.length; i++) {
//         res.push(arr2[i]);
//       }
//     }

//     if (start2 >= arr2.length) {
//       for (let i = start1; i < arr1.length; i++) {
//         res.push(arr1[i]);
//       }
//     }

//     if (arr1[start1] < arr2[start2]) {
//       res.push(arr1[start1]);
//       start1 += 1;
//     } else if (arr1[start1] > arr2[start2]) {
//       res.push(arr2[start2]);
//       start2 += 1;
//     } else {
//       res.push(arr1[start1]);
//       res.push(arr2[start2]);
//       start1 += 1;
//       start2 += 1;
//     }
//   }
//   return res;
// }

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];

  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    // console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i += 1;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j += 1;
    }
  }

  return mergedArray;
}

let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];

console.log(mergeSortedArrays(arr2, arr1));
