// Функция для проверки длины строки.

const isLength = (str, length) => str.length <= length;

isLength('проверяемая строка', 20);
isLength('проверяемая строка', 18);
isLength('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом.

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\s/g, '');
  const strReverse = str.split('').reverse().join('');
  if (strReverse === str) {
    return 'Эта строка является палиндромом';
  } else {
    return 'Эта строка не является палиндромом';
  }
};

isPalindrome('abca');
isPalindrome('дерево');
isPalindrome('Анна');
isPalindrome('А муза рада музе без ума да разума');


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const isNumber = (str) => {
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
};

isNumber('2023 год');
isNumber('ECMAScript 2022');
isNumber('1 кефир, 0.5 батона');
isNumber('а я томат');


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

const addString = (stringBasic, stringLength, stringAdditional) => {
  if (stringBasic.length >= stringLength) {
    return stringBasic;
  }
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
};

addString('q', 4, 'we');
addString('qwerty', 4, '0');
addString('q', 4, 'werty');
addString('1', 4, '0');
addString('1', 2, '0');
