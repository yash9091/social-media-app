const multer = require('multer');

const path=require('path');

const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({

destination: function (req, file, cb)

{ cb(null, './public/images/uploads') // Destination folder for uploads

}, filename: function (req, file, cb) {

const uniquename = uuidv4();
 cb(null,uniquename+path.extname(file.originalname))
 // Generating a unique filename using UUID cb(null, uniqueFilename); // Use the unique filename for the uploaded file

}

});

const upload = multer({ storage: storage });
module.exports= upload
