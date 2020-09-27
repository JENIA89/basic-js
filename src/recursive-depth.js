// const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    let currentDepth = 1;

    if (Array.isArray(arr)) {
      for (let elem of arr) {
        if (Array.isArray(elem)) {
          currentDepth += this.calculateDepth(elem);
        }
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
        currentDepth = 1;
      }
    }

    return maxDepth;
  }
};
