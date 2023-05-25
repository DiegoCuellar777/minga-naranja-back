import multer from "multer";

const Multer = multer({
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error('Solo se permiten archivos PNG y JPEG.'));
        }
    },
    storage: multer.memoryStorage(),
    limits: 10240 * 10240,
})

export default Multer