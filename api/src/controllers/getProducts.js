const { response } = require("../utils");
const { Product, Brand } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const { name, description } = req.query;
    const data = await Product.findAll({ include: Brand });
    if (name) {
      let prodByName = await data.filter((el) => {
        return el.name.toLowerCase().includes(name.toLowerCase());
      });
      if (prodByName.length) return response(res, 200, prodByName);
      if (!prodByName.length) return response(res, 200, {msg: 'Product not found'});
    }
    if (description) {
      let prodByDesc = await data.filter((el) => {
        return el.description.toLowerCase().includes(description.toLowerCase());
      });
      if (prodByDesc.length) return response(res, 200, prodByDesc);
      if (!prodByDesc.length) return response(res, 200, {msg: 'Product not found'});
    }
    response(res, 200, data);
  } catch (error) {
    return response(res, 400, error.message);
  }
};
