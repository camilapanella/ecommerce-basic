const { response } = require("../utils");
const { Brand } = require("../db.js");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    await Brand.destroy({ where: { id: id } });
    response(res, 200, "deleted successfully");
  } catch (error) {
    return response(res, 400, error.message);
  }
};