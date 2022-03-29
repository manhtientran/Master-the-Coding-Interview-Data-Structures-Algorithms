const strings = ["a", "b", "c", "d"];
// 4 * 4 = 16 bytes of storage

console.log(strings[2]);

// push
strings.push("e");
console.log(strings);

// pop
strings.pop();
console.log(strings);

strings.pop();

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);

// C++
// int a[20];
// int b[5] {1, 2, 3, 4, 5};
