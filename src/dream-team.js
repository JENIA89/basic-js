const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let dreamTeamArr = [];
  for (let name of members) {
    if (typeof name === "string") {
      let newName = name.trim();
      dreamTeamArr.push(newName[0].toUpperCase());
    }
  }

  return dreamTeamArr.sort().join("");
};
