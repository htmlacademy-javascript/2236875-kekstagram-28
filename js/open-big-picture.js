import { picturesContainer } from './thumbnail.js';
import { isEscapeKey } from './util.js';

const bigPictureModal = document.querySelector('.big-picture');
const bigPictureModalImg = bigPictureModal.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPictureModal.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsContainer = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = bigPictureModal.querySelector('.social__comment-count');
const commentLoader = bigPictureModal.querySelector('.comments-loader');
const bigPictureModalCancel = document.querySelector('.big-picture__cancel');

const templateComment = document.querySelector('#comments').content.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const clearComments = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

function closeBigPictureModal () {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearComments(commentsContainer);

  document.removeEventListener('keydown', onDocumentKeydown);
}

function openUBigPictureModal () {
  commentLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureModalCancel.addEventListener('click', closeBigPictureModal);

  document.addEventListener('keydown', onDocumentKeydown);
}

clearComments(commentsContainer);

const renderComents = (arrElem) => {
  const comentRenderFragment = document.createDocumentFragment();
  arrElem.comments.forEach(({avatar, name, message}) => {
    const userComment = templateComment.cloneNode(true);
    userComment.querySelector('.social__picture').src = avatar;
    userComment.querySelector('.social__picture').alt = name;
    userComment.querySelector('.social__text').textContent = message;
    comentRenderFragment.appendChild(userComment);
  });
  return commentsContainer.appendChild(comentRenderFragment);
};

const renderBigPhoto = (arr) => {
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      const target = evt.target.closest('.picture');
      const currentDescription = arr.find((item) => item.id === Number(target.dataset.pictureId));
      bigPictureModalImg.src = currentDescription.url;
      commentsCount.textContent = currentDescription.comments.length;
      likesCount.textContent = currentDescription.likes;
      socialCaption.textContent = currentDescription.description;
      renderComents(currentDescription);
      openUBigPictureModal();
    }
  });
};

export {renderBigPhoto};
