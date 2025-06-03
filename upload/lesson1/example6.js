require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('assets/images/kitten.jpg', {
        folder: 'cute_animals2',
        public_id: 'kitten'
    })
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));