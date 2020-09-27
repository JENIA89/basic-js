const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const res = [];

  if (options.repeatTimes == undefined) {
    res.push(str + "");
    if (options.additionRepeatTimes == undefined) {
      res.push(options.addition + "");
    }
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      res.push(str + "");
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        res.push(options.addition + "");
        if (j != options.additionRepeatTimes - 1) {
          if (options.additionSeparator == undefined) {
            res.push("|");
          } else {
            res.push(options.additionSeparator + "");
          }
        }
      }
      if (i != options.repeatTimes - 1) {
        if (options.separator == undefined) {
          res.push("+");
        } else {
          res.push(options.separator + "");
        }
      }
    }
  }

  return res.join("");
};
