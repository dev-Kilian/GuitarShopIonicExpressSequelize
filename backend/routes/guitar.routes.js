module.exports = app => {
    const guitars = require("../controllers/guitar.controller.js");

    var router = require("express").Router();

    router.post("/", guitars.create);

    router.get("/", guitars.findAll);

    router.get("/:id", guitars.findOne);

    router.put("/:id", guitars.update);

    router.delete("/:id", guitars.delete);

    app.use('/api/guitars', router);
};