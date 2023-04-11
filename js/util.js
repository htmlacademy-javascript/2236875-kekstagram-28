const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {shuffleArray, debounce};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey};

let serialNumber = 0;

const generateIdPhoto = () => {
  serialNumber += 1;
  return serialNumber;
};

export {generateIdPhoto};
