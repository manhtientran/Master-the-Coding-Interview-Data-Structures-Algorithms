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

console.log(reverseString1(test));
console.log(reverseString2(test));
console.log(reverseString3(test));
