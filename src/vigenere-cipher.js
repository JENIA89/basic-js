const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.boolean = boolean;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("Error");
    }

    let newMessage = message.toUpperCase();
    let newKey = key.toUpperCase();
    let result = [];
    let counter = 0;

    for (let i = 0; i < newMessage.length; i++) {
      let codeСhar = newMessage.charCodeAt(i);
      result.push(codeСhar);

      if (codeСhar >= 65 && codeСhar <= 90) {
        result[i] += newKey.charCodeAt((i - counter) % newKey.length) - 65;
        if (result[i] > 90) result[i] -= 26;
      } else counter++;
    }

    if (this.boolean) {
      return String.fromCharCode(...result);
    } else {
      return String.fromCharCode(...result.reverse());
    }
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("Error");
    }

    let newMessage = message.toUpperCase();
    let newKey = key.toUpperCase();
    let result = [];
    let counter = 0;

    for (let i = 0; i < newMessage.length; i++) {
      let codeСhar = newMessage.charCodeAt(i);
      result.push(codeСhar);

      if (codeСhar >= 65 && codeСhar <= 90) {
        result[i] -= newKey.charCodeAt((i - counter) % newKey.length) - 65;
        if (result[i] < 65) result[i] += 26;
      } else counter++;
    }

    if (this.boolean) {
      return String.fromCharCode(...result);
    } else {
      return String.fromCharCode(...result.reverse());
    }
  }
}

module.exports = VigenereCipheringMachine;
