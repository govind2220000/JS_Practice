function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log(cleaned);
  console.log(cleaned.split().reverse().join(""));

  // Compare the cleaned string with its reverse
  return cleaned === cleaned.split("").reverse().join("");
}
a = isPalindrome("Eva, can I see bees in a cave?");
console.log(a);
console.log(
  "Eva, can I see bees in a cave?"
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join(""),
);
