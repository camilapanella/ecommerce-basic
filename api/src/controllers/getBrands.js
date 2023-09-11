const { response } = require("../utils");
const { Brand } = require("../db.js");
const addBrands = require("../seeds/brand-seed");

module.exports = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    if (!brands.length) {
      var listBrands = await addBrands();
      return listBrands;
    }
    response(res, 200, brands);
  } catch (error) {
    return response(res, 400, error.message);
  }
};
