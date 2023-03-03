// Функция для проверки длины строки.

const checkStringLength = (str, length) => str.length <= length;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


// Функция для проверки, является ли строка палиндромом.

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrom('abca');
isPalindrom('дерево');
isPalindrom('Анна');
isPalindrom('А муза рада музе без ума да разума');


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const exctractNumber = (str) => {
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

exctractNumber('2023 год');
exctractNumber('ECMAScript 2022');
exctractNumber('1 кефир, 0.5 батона');
exctractNumber('а я томат');


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

const padStart = (sourceStr, targetLength, padStr) => {
  if (sourceStr.length >= targetLength) {
    return sourceStr;
  }

  let subStr = '';
  while (subStr.length < targetLength) {
    subStr += padStr;
  }

  return subStr.slice(0, targetLength - sourceStr.length) + sourceStr;
};

padStart('q', 4, 'we');
padStart('qwerty', 4, '0');
padStart('q', 4, 'werty');
padStart('1', 4, '0');
padStart('1', 2, '0');

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomInteger};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement};
