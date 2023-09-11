const {catchedAsync} = require("../utils")

module.exports = {
  getProducts: catchedAsync(require("./getProducts")),
  getProductsById: catchedAsync(require("./getProductsById")),
  postProduct: catchedAsync(require("./postProduct")),
  putProduct: catchedAsync(require("./putProduct")),
  deleteProduct: catchedAsync(require("./deleteProduct")),
  getBrands: catchedAsync(require("./getBrands")),
  postBrand: catchedAsync(require("./postBrand")),
  deleteBrand: catchedAsync(require("./deleteBrand"))
};