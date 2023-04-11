const COMMENT_IN_BLOCK = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const bigPictureModalImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const commentsContainer = document.querySelector('.social__comments');
const socialCommentsItem = document.querySelector('.social__comment');
const commentLoader = document.querySelector('.social__comments-loader');
const socialCommentsCount = document.querySelector('.social__comment-count');

let comments = [];
let commentsShown = 0;

const fillCommentCount = () => {
  socialCommentsCount.textContent = `${commentsShown} из ${comments.length} комментариев`;
};

const createComment = (comment) => {
  const commentTemplate = socialCommentsItem.cloneNode(true);
  const img = commentTemplate.querySelector('.social__picture');
  commentTemplate.querySelector('.social__text').textContent = comment.message;
  img.src = comment.avatar;
  img.alt = comment.name;

  return commentTemplate;
};

const renderComments = () => {
  const currentComments = comments.slice(commentsShown, commentsShown + COMMENT_IN_BLOCK);
  commentsShown += COMMENT_IN_BLOCK;
  commentsShown = Math.min(commentsShown, comments.length);
  currentComments.forEach((comment) => commentsContainer.append(createComment(comment)));
  fillCommentCount();
  if (commentsShown >= comments.length) {
    commentLoader.classList.add('hidden');
    return;
  }
  commentLoader.classList.remove('hidden');
};

const fillBigPicture = (data) => {
  socialCaption.textContent = data.description;
  bigPictureModalImg.alt = data.description;
  bigPictureModalImg.src = data.url;
  likesCount.textContent = data.likes;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  comments = [];
  commentsShown = 0;
};

const openBigPicture = (data) => {
  commentsContainer.innerHTML = '';
  comments = data.comments;
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fillBigPicture(data);
  renderComments();
  document.addEventListener('keydown', onDocumentKeydown);
};

bigPictureCancel.addEventListener('click', onBigPictureCloseClick);
commentLoader.addEventListener('click', onSocialCommentsLoaderClick);

function onSocialCommentsLoaderClick (evt) {
  evt.preventDefault();
  renderComments();
}

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape' && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function onBigPictureCloseClick (evt) {
  evt.preventDefault();
  closeBigPicture();
}

export {openBigPicture};
