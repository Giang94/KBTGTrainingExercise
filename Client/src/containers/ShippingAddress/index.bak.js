import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShippingAddressForm from './ShippingAddressForm';

class ShippingAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    console.log('history', this.props.history);
  }

  componentDidMount() {
    const itemListString = sessionStorage.getItem('cart');
    const itemList = JSON.parse(itemListString);
    let itemListArray = Array.isArray(itemList) ? itemList : [itemList];

    itemListArray.map(item => {
      item.quantity = item.quality;
      // item.showDetail = () => (
      //   <div>
      //     <div><b>{item.name}</b> by {item.brandName}</div>
      //     <div>Gender: <b>{item.gender}</b>  Age: <b>{item.age}</b></div>
      //     <div style={{color: 'red'}}>{item.status}</div>          
      //   </div>
      // );
    });

    this.setState(() => ({
      itemList: itemListArray
    }));
  }

  onSubmit() {
    console.log(this.props);
    this.props.history.push('/result');
  }

  render() {
    return (
      <div className="shipping-address">
        <div className="title">Shipping Address</div>
        <ShippingAddressForm itemList={this.state.itemList} onSubmit={this.onSubmit}/>

      </div>
    );
  }
}

export default ShippingAddress;