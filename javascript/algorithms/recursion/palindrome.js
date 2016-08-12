function palindrome(string) {
  if (string.length <= 1) {
    return true;
  }
  if (string.slice(0, 1) !== string.slice(-1)) {
    return false;
  }
  return palindrome(string.slice(1, -1));
}

exports.palindrome = palindrome;
