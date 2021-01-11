const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  extraFees: {
    type: Number,
    required: false,
    default: 0
  },
  costPerItem: {
    type: Number,
    required: true
  },
  sellingPricePerItem: {
    type: Number,
    required: true
  },
  minimumProfit: {
    type: Number,
    required: true
  },
  extraProfit: {
    type: Number,
    required: false,
    default: 0
  },
  soldQuantity: {
    type: Number,
    required: false,
    default: 0
  },
  ProfitTillDate: {
    type: Number,
    required: false,
    default: 0
  }
})

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema)

module.exports = Product
