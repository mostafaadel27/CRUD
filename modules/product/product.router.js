import { Router } from "express";
import { addProduct, allProducts, deleteProduct, productById, productsInfo, updateProduct } from "./controller/prodect.js";
const router = Router()

router.post('/product',addProduct)
router.get('/products',allProducts)
router.get('/productsinfo',productsInfo)
router.delete('/product/delete/:id',deleteProduct)
router.patch('/product/update/:id',updateProduct)
router.get('/product/:id',productById)

export default router