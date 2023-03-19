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

const clearComments = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

export {clearComments};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey};

let serialNumber = 0;

const idPhoto = () => {
  serialNumber += 1;
  return serialNumber;
};

export {idPhoto};
