const multer = require('multer'); // Importa multer
const path = require('path');    // Importa path para manejar rutas

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images')); // Usa path.join para evitar problemas de rutas
    },
    filename: (req, file, cb) => {
        let filetype = '';
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
        } else if (file.mimetype === 'image/png') {
            filetype = 'png';
        } else if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        } else {
            return cb(new Error('Unsupported file type'), null); // Maneja errores si el tipo no es válido
        }
        cb(null, 'image-' + Date.now() + '.' + filetype); // Genera un nombre único
    }
});

const upload = multer({ storage: storage });

module.exports = upload; // Exporta el middleware
