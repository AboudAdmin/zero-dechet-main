const Reclamation = require('../models/reclamation');


exports.createReclamation = async (req, res) => {
  try {
    const reclamation = new Reclamation(req.body);
    await reclamation.save();
    res.status(201).send(reclamation);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getAllReclamations = async (req, res) => {
  try {
    const reclamations = await Reclamation.find();
    res.send(reclamations);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.getReclamationById = async (req, res) => {
  try {
    const reclamation = await Reclamation.findById(req.params.id);
    if (!reclamation) {
      return res.status(404).send();
    }
    res.send(reclamation);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.updateReclamation = async (req, res) => {
  try {
    const reclamation = await Reclamation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!reclamation) {
      return res.status(404).send();
    }
    res.send(reclamation);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.deleteReclamation = async (req, res) => {
  try {
    const reclamation = await Reclamation.findByIdAndDelete(req.params.id);
    if (!reclamation) {
      return res.status(404).send();
    }
    res.send(reclamation);
  } catch (error) {
    res.status(500).send(error);
  }
};
