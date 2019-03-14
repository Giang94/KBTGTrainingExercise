import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableComponent from '../../components/TableComponent';
// import './shoppingCart.css';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipping: props.shipping,
      itemList: props.itemList,
      columnConfig: [
        {name: 'Items', key: 'details'},
        {name: 'Quantity', key: 'quantity'},
        {name: 'Price (THB)', key: 'price'}
      ]
    }
    this.processToCheckout = this.processToCheckout.bind(this);
    this.getItemNumber = this.getItemNumber.bind(this);
    this.getSubTotal = this.getSubTotal.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  getItemNumber() {
    let itemNumber = 0;
    this.state.itemList.forEach( item => {
      itemNumber += parseInt(item.quantity, 10);
    });
    return itemNumber === 1 ? itemNumber + ' item' : itemNumber + ' items';
  }

  getSubTotal() {
    let subTotal = 0;
    this.state.itemList.forEach( item => {
      subTotal += parseInt(item.price, 10) * parseInt(item.quantity, 10);
    });
    return subTotal;
  }

  getTotal() {
    return this.getSubTotal() + this.state.shipping.fee;
  }

  processToCheckout() {
    this.props.history.push('/shipping-address');
  }

  render() {
    return (
      <div className="shopping-cart">
        <div className='title'>Shopping Cart</div>
        <TableComponent 
          className='item-list' 
          columns={this.state.columnConfig} 
          data={this.state.itemList}>
        </TableComponent>
        <div className='sub-info'>
          <div className='shipping-info'>
            <div className='shipping-method'>
              <span className='shipping-method-label'>Shipping Method:</span>
              <span className='shipping-method-value'>{this.state.shipping.method}</span>
            </div>
            <div className='shipping-fee'>
              <span className='shipping-fee-label'>Shipping Fee:</span>
              <span className='shipping-fee-value'>{this.state.shipping.fee.toFixed(2)} THB</span>
            </div>
          </div>
          <div className='total-info'>
            <div className='sub-total'>
              <span className='sub-total-label'>Subtotal ({this.getItemNumber()}):</span>
              <span className='sub-total-value'>{this.getSubTotal().toFixed(2)} THB</span>
            </div>
            <div className='total'>
              <span className='total-label'>Total:</span>
              <span className='total-value'>{this.getTotal().toFixed(2)} THB</span>
            </div>
          </div>
        </div>
        <div>
          <button className="checkout" onClick={this.processToCheckout}>Process to checkout</button>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  itemList: PropTypes.array,
  shipping: PropTypes.object
};

ShoppingCart.defaultProps = {
  itemList: [],
  shipping: {
    fee: 50,
    method: 'Cash on Delivery'
  }
};

export default ShoppingCart;