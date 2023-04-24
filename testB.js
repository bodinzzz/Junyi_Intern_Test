const reverseString = (str) => {
  const reverseString = str.split("").reverse().join("");
  return reverseString;
};

const reverseStringInArray = (str) => {
  let stringArray = str.split(" ");
  const reverseStringArray = stringArray.map((string) => {
    return reverseString(string);
  });
  let reverseStr = reverseStringArray.join(" ");
  return reverseStr;
};

const testCase = "flipped classroom is important";
console.log(reverseStringInArray(testCase));
