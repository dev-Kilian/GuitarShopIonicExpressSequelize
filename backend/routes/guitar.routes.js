module.exports = app => {
    const guitars = require("../controllers/guitar.controller.js");
    const upload = require('../multer/upload'); // Correctamente cargado

    const router = require("express").Router();

    // Ruta para crear guitarra con imagen
    router.post("/", upload.single('image'), guitars.create);

    // Obtener todas las guitarras
    router.get("/", guitars.findAll);

    // Obtener una guitarra por ID
    router.get("/:id", guitars.findOne);

    // Actualizar guitarra por ID
    router.put("/:id", guitars.update);

    // Eliminar guitarra por ID
    router.delete("/:id", guitars.delete);

    app.use('/api/guitars', router);
};