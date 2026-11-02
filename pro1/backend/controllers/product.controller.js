const mongoose = require("mongoose");
const Product = require("../model/product.model");
const productSchema = require("../validation/product");
const { updatewebhook } = require("./webhook.controller");
const createProductController = async (req, res) => {
  try {
    const { name, price, description, like, discount, status, category } =
      req.body;
    const validation = productSchema.productSchema.safeParse({
      name,
      price,
      description,
      like,
      discount,
      status,
      category,
    });

    if (!validation.success) {
      return res.status(400).send(validation.error);
    }

    const product = new Product({
      name,
      price,
      description,
      like,
      discount,
      status,
      category,
    });

    product
      .save()
      .then((savedProduct) => {
        res.status(201).send(savedProduct);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllProductController = async (req, res) => {
  try {
    console.log("Fetching all products...");
    const allProducs = await Product.find({});
    res.status(200).send({
      data: allProducs,
      msg: "All products fetched successfully",
    });
  } catch (err) {
    res.status(500).send(error);
  }
};

editproductController = async(req, res) => {
  try {
    const { name, price, description, like, discount, status, category } =
      req.body;
    const { id } = req.params;
    const validation = productSchema.productSchema.safeParse({
      name,
      price,
      description,
      like,
      discount,
      status,
      category,
    });

    if (!validation.success) {
      return res.status(400).send(validation.error);
    }

    await Product.findByIdAndUpdate(id, {
      name,
      price,
      description,
      like,
      discount,
      status,
      category,
    });

    updatewebhook(
      id,
      name,
      price,
      description,
      like,
      discount,
      status,
      category,
    );

    res.status(200).send({
      msg: "Product updated successfully",
    });
  } catch (err) {
    res.status(500).send(error);
  }
};

deleteproductController = (req, res) => {};
getproductByIdController = (req, res) => {};

module.exports = {
  createProductController,
  getAllProductController,
  editproductController,
  deleteproductController,
  getproductByIdController,
};
