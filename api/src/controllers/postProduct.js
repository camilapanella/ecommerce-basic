const { response } = require("../utils");
const { Product } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return response(res, 404, "Mandatory data missing");
    const newProduct = await Product.create(req.body);
    response(res, 200, newProduct);
  } catch (error) {
    return response(res, 400, error.message);
  }
};
