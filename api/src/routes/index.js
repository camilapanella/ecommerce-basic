const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/products", controllers.getProducts);
router.post("/products", controllers.postProduct);
router.put("/products", controllers.putProduct);
router.get("/products/:id", controllers.getProductsById);
router.delete("/products/:id", controllers.deleteProduct);

router.get("/brands", controllers.getBrands);
router.post("/brands", controllers.postBrand);
router.delete("/brands/:id", controllers.deleteBrand);

module.exports = router;
