import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShippingAddressForm extends Component {
  constructor(props) {
    super(props);

    const { fullName, address1, address2, city, provine, postCode } = props.addressInfo
    this.state = {
      fullName, address1, address2, city, provine, postCode 
    };

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeAddress1 = this.onChangeAddress1.bind(this);
    this.onChangeAddress2 = this.onChangeAddress2.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeProvine = this.onChangeProvine.bind(this);
    this.onChangePostCode = this.onChangePostCode.bind(this);
    
  }

  onChangeFullName(e) {
    const fullName = e.target.value;
    this.setState(() => ({fullName}));
  }

  onChangeAddress1(e) {
    const address1 = e.target.value;
    this.setState(() => ({address1}));
  }

  onChangeAddress2(e) {
    const address2 = e.target.value;
    this.setState(() => ({address2}));
  }

  onChangeCity(e) {
    const city = e.target.value;
    this.setState(() => ({city}));
  }

  onChangeProvine(e) {
    const provine = e.target.value;
    this.setState(() => ({provine}));
  }

  onChangePostCode(e) {
    const postCode = e.target.value;
    this.setState(() => ({postCode}));
  }

  render() {
    return (
      <form className="shipping-address-form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text"
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={this.onChangeFullName}
          />
        </div>
        <div className="form-group">
          <label>Address 1</label>
          <input
            type="text"
            placeholder="Address 1"
            value={this.state.address1}
            onChange={this.onChangeAddress1}
          />
        </div>
        <div className="form-group">
          <label>Address 2</label>
          <input
            type="text"
            placeholder="Address 2"
            value={this.state.address2}
            onChange={this.onChangeAddress2}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={this.onChangeCity}
          />
        </div>
        <div className="form-group">
          <label>Provine</label>
          <input
            type="text"
            placeholder="Provine"
            value={this.state.provine}
            onChange={this.onChangeProvine}
          />
        </div>
        <div className="form-group">
          <label>Post Code</label>
          <input
            type="text"
            placeholder="Post Code"
            value={this.state.postCode}
            onChange={this.onChangePostCode}
          />
        </div>
      </form>
    );
  }
}

ShippingAddressForm.propTypes = {
  onSubmit: PropTypes.func,
  addressInfo: PropTypes.object
};

ShippingAddressForm.defaultProps = {
  onSubmit: () => {},
  addressInfo: {
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    provine: '',
    postCode: ''
  }
};

export default ShippingAddressForm;