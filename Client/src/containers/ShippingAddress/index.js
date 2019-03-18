import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShippingAddressForm from './ShippingAddressForm';
import {excuteOrderToDelivery} from '../../actions/products'

class ShippingAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const itemListString = sessionStorage.getItem('cart');
    const itemList = JSON.parse(itemListString);
    let itemListArray;
    if (itemList) {
      itemListArray = Array.isArray(itemList) ? itemList.map(item => {
        if (item) {
          item.quantity = item.quality;
        }
      }) : [itemList];
    }    
    this.setState(() => ({
      itemList: itemListArray
    }));
  }

  onSubmit(address) {
    const cartItems = Array.isArray(this.state.itemList) ? 
      this.state.itemList.map((item) => (
        item && item.id ? {[item.id]: item.quality} : null
      )): null;
    const orderObj = {
      address,
      cartItems,
      "subTotal": 100000,
      "shippingFee": 50
    }    
    console.log(orderObj);
    excuteOrderToDelivery(orderObj).then((result)=>{
      console.log(result)
      this.props.onSubmit();
    })
    this.props.history.push('/result');
  }

  render() {
    return (
      <div className="shipping-address">
        <div className="title">Shipping Address</div>
        <ShippingAddressForm onSubmit={this.onSubmit}/>

      </div>
    );
  }
}

export default ShippingAddress;