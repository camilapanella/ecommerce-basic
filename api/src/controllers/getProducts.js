const { response } = require("../utils");
const { Product, Brand } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const data = await Product.findAll({ include: Brand });
    response(res, 200, data);
  } catch (error) {
    return response(res, 400, error.message);
  }
};
