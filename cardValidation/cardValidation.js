const cardVal = (cardNumber) => {
  let checkSum = 0;
  const card = cardNumber.replaceAll(" ", "").split("").map(Number);

  for (const [idx, num] of card.entries()) {
    if (idx % 2 === 0) {
      let buffer = num * 2;
      buffer > 9 ? (checkSum += buffer - 9) : (checkSum += buffer);
    } else {
      checkSum += num;
    }
  }

  return checkSum % 10 === 0 ? "Card is valid" : "Invalid card number";
};

console.log(cardVal("123463"));
console.log(cardVal("    1234  63     "));
console.log(cardVal("12 34 63"));
console.log(cardVal("12424 2424 2424"));
console.log(cardVal("123463242424f11fff"));

console.log("\n====================================================\n");

const cardVal2 = (cardNumber) => {
  const card = cardNumber.replaceAll(" ", "");
  let checkSum = 0;
  let idx = 0;
  for (num of card) {
    if (idx % 2 === 0) {
      +num * 2 > 9 ? (checkSum += +num * 2 - 9) : (checkSum += +num * 2);
    } else {
      checkSum += +num;
    }
    idx++;
  }

  return checkSum % 10 === 0 ? "Card is valid" : "Invalid card number";
};

console.log(cardVal2("123463"));
console.log(cardVal2("    1234  63     "));
console.log(cardVal2("12 34 63"));
console.log(cardVal2("12424 2424 2424"));
console.log(cardVal2("123463242424f11fff"));
