const Produit = require('../models/produit');


exports.createProduit = async (req, res) => {
  try {
    const { nom, prix, marque, quantite, description, condition } = req.body;
    const produit = await Produit.create({ nom, prix, marque, quantite, description, condition });
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllProduits = async (req, res) => {
  try {
    const produits = await Produit.findAll();
    res.json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findByPk(req.params.id);
    if (!produit) {
      res.status(404).json({ message: "المنتج غير موجود" });
    } else {
      res.json(produit);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateProduit = async (req, res) => {
  try {
    const { nom, prix, marque, quantite, description, condition } = req.body;
    const produit = await Produit.findByPk(req.params.id);
    if (!produit) {
      res.status(404).json({ message: "المنتج غير موجود" });
    } else {
      await produit.update({ nom, prix, marque, quantite, description, condition });
      res.json(produit);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByPk(req.params.id);
    if (!produit) {
      res.status(404).json({ message: "المنتج غير موجود" });
    } else {
      await produit.destroy();
      res.json({ message: "تم حذف المنتج بنجاح" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
