const { response } = require("../utils");
const { Product, Brand } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      let prod = await Product.findByPk(id, { include: Brand });
      if (prod) return response(res, 200, prod);
    }
  } catch (error) {
    return response(res, 404, "Product not found");
  }
};
