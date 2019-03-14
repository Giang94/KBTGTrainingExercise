import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {excuteOrderToDelivery} from '../../actions/products'

class ShippingAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      address1: '',
      address2: '',
      city: '',
      provine: '',
      postCode: ''
    };
    // console.log('history', this.props.history);

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeAddress1 = this.onChangeAddress1.bind(this);
    this.onChangeAddress2 = this.onChangeAddress2.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeProvine = this.onChangeProvine.bind(this);
    this.onChangePostCode = this.onChangePostCode.bind(this);
    this.deliverySubmit = this.deliverySubmit.bind(this);
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

  deliverySubmit(e) {
    e.preventDefault();
    // console.log('called');
    // this.props.onSubmit();
    // return;
    // fullName, address1, address2, city, provine, postCode
    const orderObj = {
        "address": {
          "fullName": this.state.fullName,
          "address1": this.state.address1,
          "address2": this.state.address2,
          "city": this.state.city,
          "province": this.state.provine,
          "postCode": this.state.postCode
        },
        "cartItems": [{
          "5c88ad8bb835e74a306db14e" : 2
        }],
        "subTotal": 100000,
        "shippingFee": 50
      }
      orderObj.cartItems = this.state.itemList.map((item) => (
        {[item.id]: item.quality}
      ));
      console.log(orderObj);
      excuteOrderToDelivery(orderObj).then((result)=>{
        // console.log(result)
        // this.props.onSubmit();
        this.props.history.push('/result');
      })
      // this.props.history.push('/result');
  }

  render() {
    return (
      <div className="shipping-address">
        <div className="title">Shipping Address</div>
        <form className="shipping-address-form" onSubmit={this.deliverySubmit}>
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
          <button>Delivery to this address</button>
        </form>

      </div>
    );
  }
}

export default ShippingAddress;