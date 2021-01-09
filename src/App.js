import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "./redux/actions/products"
import "./App.css"

function App() {
  const data = [
    {
      productName: "product 1",
      quantity: 20,
      totalCost: 200,
      extraFees: 0,
      costPerItem: 10,
      sellingPricePerItem: 15,
      minimumProfit: 100,
      extraProfit: 0,
      soldQuantity: 2,
      ProfitTillDate: 30
    },
    {
      productName: "product 2",
      quantity: 20,
      totalCost: 200,
      extraFees: 0,
      costPerItem: 10,
      sellingPricePerItem: 15,
      minimumProfit: 100,
      extraProfit: 0,
      soldQuantity: 2,
      ProfitTillDate: 30
    }
  ]

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts(data))
  }, [])

  const products = useSelector(state => state.products.products)
  console.log({ products })

  const generateProducts = () => {
    if (products) {
      return products.map((product, index) => {
        const {
          productName,
          quantity,
          totalCost,
          extraFees,
          costPerItem,
          sellingPricePerItem,
          minimumProfit,
          extraProfit,
          soldQuantity,
          ProfitTillDate
        } = product
        return (
          <tr key={index}>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{totalCost}</td>
            <td>{extraFees}</td>
            <td>{costPerItem}</td>
            <td>{sellingPricePerItem}</td>
            <td>{minimumProfit}</td>
            <td>{extraProfit}</td>
            <td>{soldQuantity}</td>
            <td>{ProfitTillDate}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        )
      })
    } else {
      return <div>no products</div>
    }
  }

  return (
    <div>
      <h1>Product Selling Tracker</h1>
      <button>Add Product</button>
      <table>
        <thead>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Total Cost</th>
          <th>Extra fees</th>
          <th>Cost / item</th>
          <th>Selling price / item</th>
          <th>Minimum expected profit</th>
          <th>Extra profit</th>
          <th>Sold Quantity</th>
          <th>Profit till date</th>
          <th>Controls</th>
        </thead>
        <tbody>{generateProducts()}</tbody>
      </table>
    </div>
  )
}

export default App
