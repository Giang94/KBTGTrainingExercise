import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import SelectBox from '../../components/Select'
import {excuteGetProductDetail} from '../../actions/products'


const rootStyle = {
  width: '700px',
  margin: '0 auto'
};
let carts = []

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetail: [],
            quality: 1,
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      this.setState({quality: event.target.value})
    }

    handleClick(event) {
      this.state.productDetail['quality'] = this.state.quality
      carts.push(this.state.productDetail)
      sessionStorage.setItem('cart', JSON.stringify(carts));
      this.props.history.push('/shopping-cart')
    }

    componentDidMount() {
      excuteGetProductDetail(this.props.match.params.searchParams).then((result) => {
        if(result) {
          this.setState({productDetail: result})
        }
      }).catch()
    }

    render() {
        const productDetail = this.state.productDetail
        const QValue = ['1', '2', '3', '4', '5']
        return <div style={rootStyle}>
        <div className="item item-2">
          <img className="item-image" src="https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-6-spacegray?$device-lg$"/>
          <h2 className="item-price">
             Branch: {productDetail.brandName}
          </h2>
          <div className="item-details">
            <h1 className="item-name">Name: {productDetail.name}</h1>
            <h2 className="item-price">
               Gender: {productDetail.gender}
            </h2>
            <h2 className="item-price">
               Age: {productDetail.age}
            </h2>
             <h2 className="item-price">
                Price: {productDetail.price}
             </h2>
             <form className="item-add-form">
                <span className="item-qty-label">Qty:</span>
                <SelectBox defaultValue={1} id={'QValue'} handleChange={this.handleChange} data={QValue}/>
                <br/>
                <br/>
                <button className="item-add-button" type="button" onClick={this.handleClick}>Add to cart</button>
             </form>
          </div>
       </div>
      </div>
    }
}
