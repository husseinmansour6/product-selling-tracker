import "./App.css"

function App() {
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
        <tbody>
          <tr>
            <td>product 1</td>
            <td>20</td>
            <td>200</td>
            <td>0</td>
            <td>10</td>
            <td>15</td>
            <td>300</td>
            <td>0</td>
            <td>2</td>
            <td>30</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
