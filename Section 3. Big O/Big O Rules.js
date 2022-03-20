function blah(items) {
  console.log(items[0]);
  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// logAllPairsOfArray(boxes);

function blah1(numbers) {
  console.log("These are the numbers: ");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("And these are their sums: ");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

// blah1(boxes);
