const Commentaire = require('../models/commentaire');


exports.createCommentaire = async (req, res) => {
  try {
    const commentaire = new Commentaire(req.body);
    await commentaire.save();
    res.status(201).send(commentaire);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getAllCommentaires = async (req, res) => {
  try {
    const commentaires = await Commentaire.find();
    res.send(commentaires);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCommentaireById = async (req, res) => {
  try {
    const commentaire = await Commentaire.findById(req.params.id);
    if (!commentaire) {
      return res.status(404).send();
    }
    res.send(commentaire);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.updateCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!commentaire) {
      return res.status(404).send();
    }
    res.send(commentaire);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.deleteCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.findByIdAndDelete(req.params.id);
    if (!commentaire) {
      return res.status(404).send();
    }
    res.send(commentaire);
  } catch (error) {
    res.status(500).send(error);
  }
};
