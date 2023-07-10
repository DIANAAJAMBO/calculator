/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// this the client interaction to maximize the user experience acurrency of the calculator

const input1 = document.getElementById('first');
const input2 = document.getElementById('second');
const operator = document.getElementById('operator');
const result = document.getElementById('screen');
const myObject = {
  input1: '',
  input2: '',
  operator: '',
};
input1.addEventListener('input', (event) => {
  myObject.input1 = event.target.value;
  result.value = `${myObject.input1} ${myObject.operator} ${myObject.input2}`;
});
input2.addEventListener('input', (event) => {
  myObject.input2 = event.target.value;
  result.value = `${myObject.input1} ${myObject.operator} ${myObject.input2}`;
});
operator.addEventListener('input', (event) => {
  myObject.operator = event.target.value;
  result.value = `${myObject.input1} ${myObject.operator} ${myObject.input2}`;
});



function calculate(num1,operator2,num2) {
  num1 = parseFloat(document.getElementById('first').value);
  num2 = parseFloat(document.getElementById('second').value);
  operator2 = document.getElementById('operator').value;
  // let result1= '';
  // num1=number1
  // num2=number2
  // operator2=operator1
  // let result1;
  switch (operator2) {
    case '+':
      result1 = num1 + num2;
      break;
    case '-':
      result1 = num1 - num2;
      break;
    case '*':
      result1 = num1 * num2;
      break;
    case '/':
      result1 = num1 / num2;
      break;
    case '%':
      result1 = num1 % num2;
      break;
    default:
      result1 = 'Invalid operator';
      return false;
      break;
  }
  
  document.getElementById('screen').value = result1;
  // return used for testing purpose
  // return result1
}