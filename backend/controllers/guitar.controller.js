const db = require("../models");
const Guitar = db.guitarShop;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.brand) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const guitar = {
        brand: req.body.brand,
        model: req.body.model
    }

    Guitar.create(guitar)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the guitar."
        });
    });
};

exports.findAll = (req, res) => {
    Guitar.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving guitars."
        });
    });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};