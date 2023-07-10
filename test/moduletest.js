function calculate(num1, operator2, num2) {
  let result1;
  switch (operator2) {
    case "+":
      result1 = num1 + num2;
      break;
    case "-":
      result1 = num1 - num2;
      break;
    case "*":
      result1 = num1 * num2;
      break;
    case "/":
      result1 = num1 / num2;
      break;
    case "%":
      result1 = num1 % num2;
      break;
    default:
      result1 = "Invalid operator";
      return false;
      break;
  }

  // return used for testing purpose
  return result1;
}

module.exports = calculate;
