const {
    createProductController,
    getAllProductController,
} = require("../controllers/product.controller");
const route = require("express")
const router = route.Router();

router.post("/create-product", createProductController)
router.get("/", getAllProductController)


// router.get("/product/:id", product.getProductByIdController);
// router.put("/product/:id", product.updateProductController);
// router.delete("/product/:id", product.deleteProductController);

module.exports = router;