const isPalindromeForSmallString = (str) => {
  if (str.length < 1) {
    return false;
  }
  if (str.length === 1) {
    return true;
  }
  str = str.replaceAll(" ", "").toUpperCase();
  return str === str.split("").reverse().join("");
};



// console.log(isPalindromeForSmallString("      abc     drf      234"));
// console.log(isPalindromeForSmallString("abba"));
// console.log(isPalindromeForSmallString("Abba"));
// console.log(isPalindromeForSmallString("aaabbbccbbbaaa"));
// console.log(isPalindromeForSmallString("dg ffdg fdF   JJJ   dfg"));
// console.log(isPalindromeForSmallString("a"));
// console.log(isPalindromeForSmallString(""));

console.log(
  "=============================================================================="
);



const isPolindrom = (data) =>
  data
    ? data.trim().split("").reverse().join("").toUpperCase() ===
      data.trim().toUpperCase()
    : false;

console.log(isPolindrom("      abc     drf      234"));
console.log(isPolindrom("abba"));
console.log(isPolindrom("Abba"));
console.log(isPolindrom("aaabbbccbbbaaa"));
console.log(isPolindrom("dg ffdg fdF   JJJ   dfg"));
console.log(isPolindrom("a"));
console.log(isPolindrom(""));

console.log(
  "=============================================================================="
);

const isPalindromePointerMethod = (str) => {
  if (str.length < 1) {
    return false;
  }
  if (str.length === 1) {
    return true;
  }
  str = str.replaceAll(" ", "").toUpperCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

// console.log(isPalindromePointerMethod("      abc     drf      234"));
// console.log(isPalindromePointerMethod("abba"));
// console.log(isPalindromePointerMethod("Abba"));
// console.log(isPalindromePointerMethod("aaabbbccbbbaaa"));
// console.log(isPalindromePointerMethod("dg ffdg fdF   JJJ   dfg"));
// console.log(isPalindromePointerMethod("a"));
// console.log(isPalindromePointerMethod(""));
