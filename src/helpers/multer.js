import multer from "multer";

const imageMimeTypes = {
  "image/jpeg": ".jpeg",
  "image/jpg": ".jpg",
};

const videoMimeTypes = {
  "video/mp4": ".mp4",
};

const storageImage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/uploads/Images');
  },
  filename: (req, file, callback) => {
    let { title } = req.body;
    title = title.split(' ').join('_');
    const extension = imageMimeTypes[file.mimetype];
    const filename = `${title.toLowerCase()}${extension}`;
    if (!extension) {
      return callback(new Error('Le type de fichier est incorrect'), null);
    }
    callback(null, filename);
  },
});

const storageVideo = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/uploads/Videos');
  },
  filename: (req, file, callback) => {
    let { title } = req.body;
    title = title.split(' ').join('_');
    const extension = videoMimeTypes[file.mimetype];
    const filename = `${title.toLowerCase()}${extension}`;
    if (!extension) {
      return callback(new Error('Le type de fichier est incorrect'), null);
    }
    callback(null, filename);
  },
});

export const uploadImage = multer({ storage: storageImage }).single('image');
export const uploadVideo = multer({ storage: storageVideo }).single('video');
