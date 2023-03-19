const thumbnailTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

const createMiniatures = (photos) => {
  const pictureRenderingFragment = document.createDocumentFragment();
  photos.forEach(({likes, comments, url, description, id}) => {
    const userPictureElement = thumbnailTemplate.cloneNode(true);
    userPictureElement.querySelector('.picture__likes').textContent = likes;
    userPictureElement.querySelector('.picture__comments').textContent = comments.length;
    userPictureElement.querySelector('.picture__img').src = url;
    userPictureElement.querySelector('.picture__img').alt = description;
    userPictureElement.querySelector('.picture').dataset.pictureId = id;
    pictureRenderingFragment.appendChild(userPictureElement);
  });

  return picturesContainer.appendChild(pictureRenderingFragment);
};

export {createMiniatures};
export {picturesContainer};
