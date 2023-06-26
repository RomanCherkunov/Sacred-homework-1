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

console.log(isPalindromeForSmallString("      abc     drf      234"));
console.log(isPalindromeForSmallString("abba"));
console.log(isPalindromeForSmallString("Abba"));
console.log(isPalindromeForSmallString("aaabbbccbbbaaa"));
console.log(isPalindromeForSmallString("dg ffdg fdF   JJJ   dfg"));
console.log(isPalindromeForSmallString("a"));
console.log(isPalindromeForSmallString(""));

console.log(
  "=============================================================================="
);

const isPalindromeRecursion = (str) => {
  str = str.replaceAll(" ", "").toUpperCase();

  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) {
    return isPalindromeRecursion(str.slice(1, -1));
  }
  return false;
};

console.log(isPalindromeRecursion("      abc     drf      234"));
console.log(isPalindromeRecursion("abba"));
console.log(isPalindromeRecursion("Abba"));
console.log(isPalindromeRecursion("aaabbbccbbbaaa"));
console.log(isPalindromeRecursion("dg ffdg fdF   JJJ   dfg"));
console.log(isPalindromeRecursion("a"));
console.log(isPalindromeRecursion(""));

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

console.log(isPalindromePointerMethod("      abc     drf      234"));
console.log(isPalindromePointerMethod("abba"));
console.log(isPalindromePointerMethod("Abba"));
console.log(isPalindromePointerMethod("aaabbbccbbbaaa"));
console.log(isPalindromePointerMethod("dg ffdg fdF   JJJ   dfg"));
console.log(isPalindromePointerMethod("a"));
console.log(isPalindromePointerMethod(""));
