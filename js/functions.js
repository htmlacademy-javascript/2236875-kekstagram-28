// Функция для проверки длины строки.

function isLength (str, length) {
  if (str.length <= length) {
    return true;
  }
  return false;
}
console.log(isLength('проверяемая строка', 20));
console.log(isLength('проверяемая строка', 18));
console.log(isLength('проверяемая строка', 10));


// Функция для проверки, является ли строка палиндромом.

function isPalindrome (str) {
  str = str.toLowerCase().replaceAll(' ','');
  for (let i = 1; i <= str.length / 2; i++) {
    if (str[i - 1] === str[str.length - i]){
      return 'Эта строка палиндром';
    }
    return 'Эта строка не палиндром';
  }
}
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function isNumber (str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) || str[i] === '0') {
      answer += str[i];
    }
  }
  if (answer === '') {
    return NaN;
  }
  return Number(answer);
}
console.log(isNumber('2023 год'));
console.log(isNumber('ECMAScript 2022'));
console.log(isNumber('1 кефир, 0.5 батона'));
console.log(isNumber('а я томат'));


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

function addString (stringBasic, stringLength, stringAdditional) {
  if (stringBasic.length >= stringLength) {
    return stringBasic;
  } else {
    let answer = '';
    let subtotal = '';
    while (answer.length !== stringLength - stringBasic.length) {
      subtotal = stringAdditional + answer;
      if (subtotal.length <= stringLength - stringBasic.length) {
        answer = subtotal;
      } else {
        answer = stringAdditional.slice(0, stringLength - stringBasic.length - answer.length) + answer;
        break;
      }
    }
    return answer + stringBasic;
  }
}

console.log(addString('q', 4, 'we'));
console.log(addString('qwerty', 4, '0'));
console.log(addString('q', 4, 'werty'));
console.log(addString('1', 4, '0'));
console.log(addString('1', 2, '0'));
