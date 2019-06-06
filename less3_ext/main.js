let str = 'урок-3-был слишком легким';
console.log(str);
str = str[0].toUpperCase() + str.substring(1);
console.log(str);

let strNew = str.replace(/-/g, ' ');
console.log(strNew);

let wordIndex = strNew.indexOf('легким', -1);
let word = strNew.substring(wordIndex);
console.log(word.replace('им', 'oo'));

let summ = 0;
let arr = [20, 33, 1, 'Человек', 2, 3];
for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) == "number") {
    arr[i] = Math.pow(arr[i], 3);
    summ += arr[i];
    console.log(arr[i]);
  }
}
console.log(Math.sqrt(summ));





