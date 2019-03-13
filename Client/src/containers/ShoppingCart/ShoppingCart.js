import React, {Component} from 'react'
import TableComponent from '../../components/TableComponent/TableComponent';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <div className="title">Shopping Cart</div>
        <TableComponent></TableComponent>
        {/* <table className="order-list">
          <thead>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>$180</td>
            </tr>
          </tfoot>
        </table> */}
      </div>
    );
  }
}

export default ShoppingCart;