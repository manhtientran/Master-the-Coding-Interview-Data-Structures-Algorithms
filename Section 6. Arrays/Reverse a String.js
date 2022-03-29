function reverseString1(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

function reverseString2(str) {
  let res = "";
  let charStack = [];
  for (let i = 0; i < str.length; i++) {
    charStack.push(str[i]);
  }
  //   console.log(charStack);
  let ch = charStack.pop();

  while (ch !== undefined) {
    res += ch;
    ch = charStack.pop();
  }
  return res;
}

function reverseString3(str) {
  let charArr = str.split("");
  //   console.log(charArr);
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    let temp = charArr[start];
    charArr[start] = charArr[end];
    charArr[end] = temp;
    start += 1;
    end -= 1;
  }

  let res = "";
  for (let i = 0; i < charArr.length; i++) {
    res += charArr[i];
  }
  return res;
}

const test = "Hi my name is Mike";

// console.log(reverseString1(test));
// console.log(reverseString2(test));
// console.log(reverseString3(test));

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);

  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => str.split("").reverse().join("");

console.log(reverse3(test));
