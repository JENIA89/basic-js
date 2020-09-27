const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError("Not implemented");
  // remove line with error and write your code here
  // if (!Array.isArray(arr)) {
  //   throw new Error("Error");
  // }

  // const newArr = [...arr];

  // for (let i = 0; i <= newArr.length - 1; i++) {
  //   if (newArr[i] === "--discard-next" && i != newArr.length - 1) {
  //     newArr.splice(i, 2);
  //   } else if (newArr[i] === "--discard-next" && i === newArr.length - 1) {
  //     return arr;
  //   } else if (newArr[i] === "--discard-prev" && i != 0) {
  //     newArr.splice(i - 1, 2);
  //   } else if (newArr[i] === "--discard-prev" && i === 0) {
  //     return arr;
  //   } else if (newArr[i] === "--double-next" && i != newArr.length - 1) {
  //     newArr[i] = newArr[i + 1];
  //   } else if (newArr[i] === "--double-next" && i === newArr.length - 1) {
  //     return arr;
  //   } else if (newArr[i] === "--double-prev" && i != 0) {
  //     newArr[i] = newArr[i - 1];
  //   } else if (newArr[i] === "--double-prev" && i === 0) {
  //     return arr;
  //   }
  // }

  // return newArr;
};
