const db = require("../models");
const Guitar = db.guitarShop;

// Crear una guitarra
exports.create = async (req, res) => {
  try {
    const { brand, model } = req.body;

    // Validar datos requeridos
    if (!brand || !model) {
      return res.status(400).send({ message: "Brand and Model cannot be empty!" });
    }

    // Procesar archivo de imagen
    const filename = req.file ? req.file.filename : null;

    const guitar = await Guitar.create({
      brand,
      model,
      filename,
    });

    res.status(201).send(guitar);
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while creating the guitar.",
    });
  }
};

// Obtener todas las guitarras
exports.findAll = async (req, res) => {
  try {
    const guitars = await Guitar.findAll();
    res.send(guitars);
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while retrieving guitars.",
    });
  }
};

// Obtener una guitarra por ID
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const guitar = await Guitar.findByPk(id);

    if (guitar) {
      res.send(guitar);
    } else {
      res.status(404).send({ message: `Guitar with id=${id} not found.` });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || `Error retrieving Guitar with id=${id}.`,
    });
  }
};

// Actualizar una guitarra por ID
exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).send({ message: "The request body cannot be empty!" });
    }

    const [updated] = await Guitar.update(req.body, { where: { id } });

    if (updated) {
      res.send({ message: "Guitar was updated successfully!" });
    } else {
      res.status(404).send({
        message: `Cannot update Guitar with id=${id}. Maybe it was not found or the body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({ message: `Error updating Guitar with id=${id}.` });
  }
};

// Eliminar una guitarra por ID
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Guitar.destroy({ where: { id } });

    if (deleted) {
      res.send({ message: "Guitar was deleted successfully!" });
    } else {
      res.status(404).send({
        message: `Cannot delete Guitar with id=${id}. Maybe it was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({ message: `Could not delete Guitar with id=${id}.` });
  }
};
