'use strict';

const users = [{},{},{},{},{}];
const myArrUsers = new MyArray({},{},{},{},{});

const subscribe = function(elem){
  elem.isSubscribed = true;
}

users.forEach(subscribe);

myArrUsers.forEach(function(elem){
  elem.isSubscribed = true;
});


const numsArray = [1, 2, 3, 4, 5];
const numsMyArray = new MyArray(1, 2, 3, 4, 5);

function square(currentNumber) {
  const result = currentNumber * currentNumber;
  console.log(result);
  return result;

}

function isEven(num){
  return num % 2 === 0;
}

function isOdd(num){
  return num % 2 !== 0;
}


numsArray.forEach(square);
numsMyArray.forEach(function(currentNumber, index, arr){
  arr[index] = square(currentNumber)
});