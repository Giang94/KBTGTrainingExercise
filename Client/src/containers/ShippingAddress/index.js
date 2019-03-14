import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShippingAddressForm from './ShippingAddressForm';

class ShippingAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
    };
  }

  onChangeFullName() {

  }

  render() {
    return (
      <div className="shipping-address">
        <div className="title">Shipping Address</div>
        <ShippingAddressForm />

      </div>
    );
  }
}

export default ShippingAddress;