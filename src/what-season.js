const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) === "[object Date]") {
    let ourDate = date.getMonth();

    if (ourDate === 11 || ourDate === 0 || ourDate === 1) {
      return "winter";
    } else if (ourDate === 2 || ourDate === 3 || ourDate === 4) {
      return "spring";
    } else if (ourDate === 5 || ourDate === 6 || ourDate === 7) {
      return "summer";
    } else if (ourDate === 8 || ourDate === 9 || ourDate === 10) {
      return "autumn";
    }
  } else {
    throw new Error("Error");
  }
};
