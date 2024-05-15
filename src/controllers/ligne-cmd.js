const Cart = require('../models/cartModel');


exports.createOrUpdateCart = async (req, res) => {
    try {
        const { produits, user } = req.body;
        let cart = await Cart.findOne({ user: user });

        if (cart) {
            produits.forEach((produit) => {
                const existingProductIndex = cart.produits.findIndex((item) => item.product.toString() === produit.product);
                if (existingProductIndex >= 0) {
                    cart.produits[existingProductIndex].quantity += produit.quantity;
                } else {
                    cart.produits.push(produit);
                }
            });
            cart = await cart.save();
        } else {
            cart = await Cart.create({ user, produits });
        }

        res.status(201).json(cart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId }).populate('produits.product');
        if (!cart) {
            res.status(404).json({ message: "سلة التسوق غير موجودة" });
        } else {
            res.json(cart);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateCart = async (req, res) => {
    try {
        const { produits } = req.body;
        const cart = await Cart.findOne({ user: req.params.userId });

        if (!cart) {
            res.status(404).json({ message: "سلة التسوق غير موجودة" });
        } else {
            cart.produits = produits;
            await cart.save();
            res.json(cart);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.deleteCartItem = async (req, res) => {
    try {
        const { productId } = req.body;
        const cart = await Cart.findOne({ user: req.params.userId });

        if (!cart) {
            res.status(404).json({ message: "سلة التسوق غير موجودة" });
        } else {
            cart.produits = cart.produits.filter((item) => item.product.toString() !== productId);
            await cart.save();
            res.json(cart);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.params.userId });

        if (!cart) {
            res.status(404).json({ message: "سلة التسوق غير موجودة" });
        } else {
            cart.produits = [];
            await cart.save();
            res.json({ message: "تم إفراغ السلة بنجاح" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
