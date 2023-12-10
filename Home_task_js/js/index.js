console.log('Task_1');

let day = 1 //Введіть число від 1 до 7;
if (day == 1) {
   console.log('Понеділок');
} else if (day == 2) {
   console.log('Вівторок');
} else if (day == 3) {
   console.log('Середа');
} else if (day == 4) {
   console.log('Четвер');
} else if (day == 5) {
   console.log('П\'ятниця');
} else if (day == 6) {
   console.log('Субота');
} else if (day == 7) {
   console.log('Неділя');
} else {
   console.log('Введено не вірне число');
}

console.log('Task_2');

   function ucfirst(str) {
   return str[0].toUpperCase() + str.substr(1);
}
   var str = 'var_text_hello';
   var res = [];
   var newArr = str.split('_');
   for (let i = 0; i < newArr.length; i++) {
   var newStr = ucfirst(newArr[i]);
   res.push(newStr);
   }
   var final = res.join(' ');
   console.log(final);

console.log('Task_3');

var arr = new Array();
for (var i=0; i<10; i++) {
   arr.push('x');
}
console.log(arr);

console.log('Task_4');

let num = 0;
console.log(num);
if (num > 0) {
   function ggg() {console.log(1) }
} else {
   function ggg() {console.log(2) }
};
ggg();

console.log('Task_5');

function ggg() {

   let parOne = function () {
      return 3;
   };
   let parTwo = function () {
      return 4;
   };
   let parSum = parOne + parTwo;
   return parSum;
}
ggg();

console.log('Task_6');

let arrOne = [];
let arrTwo = [];
const arrS = (arrOne, arrTwo) => {
   if (
   arrOne.length === arrTwo.length &&
   arrOne.every((element, index) => element === arrTwo[index])
   ) {
   return true;
}
   return false;
}

console.log('Task_7');

function chunkArr(myArr, chunk_size){
   var index = 0;
   var arrayLength = myArr.length;
   var tempArr = [];
   for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArr.slice(index, index+chunk_size);
      tempArr.push(myChunk);
   }
   return tempArr;
}
var result = chunkArr([1,2,3,4,5,6,7], 2);
console.log(result);
