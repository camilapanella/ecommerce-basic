const { response } = require("../utils");
const { Brand } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const { name, logo_url } = req.body;
    if (!name) return response(res, 400, "Mandatory data missing");
    const newBrand = await Brand.create({ name, logo_url });
    response(res, 200, "Created succcessfully");
  } catch (error) {
    return response(res, 400, error.message);
  }
};
