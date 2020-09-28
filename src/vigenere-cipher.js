const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    // if(message == undefined || key == undefined){
    //   throw new Error('Error')
    // }

    // let newMessage = message.toUpperCase();
    // let newKey = key.toUpperCase();
    // let result = '';

    // for(let i = 0; i <= newMessage.length; i++){

    // }

    throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
  decrypt() {
    throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
