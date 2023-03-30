import {createPhotoDescriptions} from './functions.js';
import {openBigPicture} from './open-big-picture.js';

const pictures = createPhotoDescriptions();
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniatures = (data) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = data.url;
  thumbnail.querySelector('.picture__img').alt = data.description;
  thumbnail.querySelector('.picture__comments').textContent = data.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = data.likes;

  thumbnail.addEventListener('click', (event) => {
    event.preventDefault();
    openBigPicture(data);
  });
  return thumbnail;
};

const renderThumbnails = () => {
  pictures.forEach((data) => container.append(createMiniatures(data)));
};

export {renderThumbnails};
