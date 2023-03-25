import { createPhotoDescriptions } from './functions.js';
import { createMiniatures } from './thumbnail.js';
import { picturesContainer } from './thumbnail.js';
import { renderBigPhoto } from './open-big-picture.js';
const pictures = createPhotoDescriptions();
createMiniatures(pictures);
renderBigPhoto(pictures, picturesContainer);
