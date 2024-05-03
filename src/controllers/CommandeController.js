const Commande = require('../models/commande');

exports.createCommande = async (req, res) => {
    try {
        const { produits, adresseLivraison, methodePaiement } = req.body;
        const nouvelleCommande = await Commande.create({ produits, adresseLivraison, methodePaiement });
        res.status(201).json(nouvelleCommande);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllCommandes = async (req, res) => {
    try {
        const commandes = await Commande.findAll();
        res.json(commandes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCommandeById = async (req, res) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        if (!commande) {
            res.status(404).json({ message: "الطلب غير موجود" });
        } else {
            res.json(commande);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCommande = async (req, res) => {
    try {
        const { produits, adresseLivraison, methodePaiement, etat } = req.body;
        const commande = await Commande.findByPk(req.params.id);
        if (!commande) {
            res.status(404).json({ message: "الطلب غير موجود" });
        } else {
            await commande.update({ produits, adresseLivraison, methodePaiement, etat });
            res.json(commande);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCommande = async (req, res) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        if (!commande) {
            res.status(404).json({ message: "الطلب غير موجود" });
        } else {
            await commande.destroy();
            res.json({ message: "تم حذف الطلب بنجاح" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
