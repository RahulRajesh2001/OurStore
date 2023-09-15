import express from 'express'
const router = express.Router()
import {
  getProducts,
  getSingleProduct,
} from '../controllers/productCountroller.js'

//fetch all products
router.route('/').get(getProducts)

//get a single product

router.route('/:id').get(getSingleProduct)

export default router
