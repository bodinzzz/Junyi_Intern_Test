const reverseString = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
};

const testCase = "junyiacademy";
console.log(reverseString(testCase));
