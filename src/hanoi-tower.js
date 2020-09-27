const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minMove = 2 ** disksNumber - 1;

  let sec = Math.floor((minMove * 3600) / turnsSpeed);

  const obj = {};
  obj.turns = minMove;
  obj.seconds = sec;

  return obj;
};
