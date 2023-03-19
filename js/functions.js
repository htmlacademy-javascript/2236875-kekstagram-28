import {getRandomArrayElement} from './util.js';
import {getRandomInteger} from './util.js';
import {idPhoto} from './util.js';

const MIN_COMMENTS = 1;
const MAX_COMMENTS = 16;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;
const MIN_COMMENT_ID = 1;
const MAX_COMMET_ID = 999;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

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

const generatePhotoId = createRandomIdGenerator(MIN_PHOTO_ID, MAX_PHOTO_ID);
const generateCommentId = createRandomIdGenerator(MIN_COMMENT_ID, MAX_COMMET_ID);

const createComment = () => {
  const comment = {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
  return comment;
};

const createComments = () => Array.from(
  { length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) },
  createComment
);

const createPhotoDescription = () => ({
  id: idPhoto() - 1,
  url: `photos/${generatePhotoId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(),
});

const createPhotoDescriptions = () => Array.from(
  { length: 25 },
  createPhotoDescription, createComments
);

export {createPhotoDescriptions};
