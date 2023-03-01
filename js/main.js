const DESCRIPTIONS = [
  'Дома',
  'На работе',
  'На тренировке',
  'На прогулке',
  'На учёбе',
];

const NAMES = [
  'Иван',
  'Никита',
  'Анастасия',
  'Ольга',
  'Дмитрий',
  'Аркадий',
  'Юлия',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdGenerator(a, b) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(a, b);

    if (previousValues.length >= b - a + 1) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdGenerator(1, 25);
const generateId = createRandomIdGenerator(1, 25);
const generateCommentId = createRandomIdGenerator(1, 999);

const createComment = () => {
  const getComment = {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
  return getComment;
};

const createPhotoDescription = () => {
  const getPhotoDescription = {
    id: generateId(),
    url: `photos/${generatePhotoId()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
  };
  return getPhotoDescription;
};

const createComments = () => {
  const getComments = { comments: (Array.from(
    { length: getRandomInteger(1, 16) },
    createComment
  ))
  };
  return getComments;
};

const createPhotoDescriptions = Array.from(
  { length: 25 },
  createPhotoDescription, createComments
);

createPhotoDescriptions();
