
// TASK 1  Найти сумму чисел массива, которые стоят на четных местах.
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,15,17,23,56,68,78,89]
let result = 0;
for(i in arr){
    if (i % 2 == 0) {
    result += arr[i]
    }
}
console.log(result);

// TASK 2 Найти сумму и произведение элементов массива.
let ary = [3,4,5,6,7,8,9,2,1,25]
let sum = 0;
let multiply = 1;
for(j of ary){
    
   sum += j;
   multiply *= j;
 }
console.log("Сумма чисел массива: " + sum);
console.log("Произведение чисел массива: " + multiply);

// TASK 3 Найти сумму четных чисел массива.

let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
let sum3 = 0;
for (k of array) {
	if(k % 2 == 0){
		sum3 += k;
  }
 }
 console.log(sum3)

//  TASK 4 Найти сумму нечетных чисел массива, которые превосходят 10.

const arr4 = [3,5,6,7,2,9,11,10,13,15,12]
let sum4 = 0;
for (var z = 0; z < arr4.length; z++){
if(arr4[z] % 2 !== 0  && arr4[z] > 10){
     sum4 += arr4[z]
  }
}
console.log(sum4)

// TASK 5 Найти сумму наибольшего и наименьшего элементов массива.

const arr5 = [8,3,5,6,7,2,9,11,10,13,15,12]
let min = arr5[0];
let max = 0;
let res = 0;
for(f of arr5) {
  if (f < min) {
    min = f
  }
  else if (f > max) {
    max = f
  }
}
console.log(min);
console.log(max);
res = min + max;
console.log(res);

// TASK 6 Найти наименьший четный элемент массива.

const arr6 = [18,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
let min6 = arr6[0];

for (item of arr6) {
  if(item % 2 == 0){
		if (item < min6) {
      min6 = item
    }
  }  
}
 console.log(min6)

// TASK 7 Существует строка. Показать третий, шестой, девятый и так далее символы.

const text = "Hello,World! How a you?"
let arr7 = text.split('')
let res7 = [];
console.log(arr7)
for (n in arr7){
	if(n % 3 == 0){
		res7 += arr7[n];
  }  
}
console.log(res7)

// TASK 8 Заменить в строке все вхождения 'word' на 'letter'

const text8 = 'Hello,World! write word text.Word.Words,words,hoy,soy,letter-getter-setter, word.';
let str = text8.replace(/word/g,'letter')
console.log(str)
let str2 = str.replace(/Word/g,'letter')
console.log(str2)
 
// TASK 9 Пользователь вводит время в минутах и расстояние в километрах. Найти скорость в м/c.

let time = Number(prompt('Введите время в минутах'))
console.log(time)
let distance = Number(prompt('Введите расстояние в км'))
 resTime = time / 60;
 resDistance = distance / 1000;
 let speed = resDistance /  resTime
 alert('скорость:'+ speed);

// TASK 10 Проверить массив на пустоту

arr10 = [];
console.log(arr10.length)

// TASK 11 Удалить первый элемент массива

let arr11 = ['a', 'b', 'c', 'd', 'e'];
arr11.shift();
console.log(arr11);

// TASK 12 Удалить последний элемент массива

let arr12 = ['a', 'b', 'c', 'd', 'e'];
arr12.pop();
console.log(arr12);