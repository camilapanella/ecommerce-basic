const { response } = require("../utils");
const { Product } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const { name, description, price, image_url } = req.body;
    const { id } = req.params;
    const updated = await Product.update({
      where: { id: id },
      name,
      description,
      price,
      image_url,
    });
    response(res, 200, updated);
  } catch (error) {
    return response(res, 400, error.message);
  }
};
