const reverseString = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
};

const reverseStringInArray = (str) => {
  const stringArray = str.split(" ");
  const reverseStringArray = stringArray.map((string) => {
    return reverseString(string);
  });
  const reverseStr = reverseStringArray.join(" ");
  return reverseStr;
};

const testCase = "flipped classroom is important";
console.log(reverseStringInArray(testCase));
