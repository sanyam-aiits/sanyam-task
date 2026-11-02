const {
    createProductController,
    getAllProductController,
    editproductController
} = require("../controllers/product.controller");
const route = require("express")
const router = route.Router();

router.post("/create-product", createProductController)
router.get("/", getAllProductController)


router.put("/product/:id", editproductController);
// router.get("/product/:id", product.getProductByIdController);
// router.delete("/product/:id", product.deleteProductController);

module.exports = router;