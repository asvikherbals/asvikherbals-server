const Product = require("../models/Product");

module.exports = {
  Query: {
    getProducts: async () => {
      try {
        return await Product.find();
      } catch (err) {
        throw new Error("Error fetching products");
      }
    },
  },
  Mutation: {
    addProduct: async (_, { name, description, price }) => {
      const newProduct = new Product({
        name,
        description,
        price,
      });
      return await newProduct.save();
    },
  },
};
