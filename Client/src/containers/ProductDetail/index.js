import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectBox from '../../components/Select'
import {excuteGetProductDetail} from '../../actions/products'

const rootStyle = {
  width: '700px',
  margin: '0 auto'
};

export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ageValue: '',
            genderValue: '',
            isClickedSearch: '',
            products: []
        }
    }

    handleChange(event) {
    }

    handleClick(event) {
    }

    componentDidMount() {
      console.log(this.props.match.params.searchParams)
    }

    render() {
      console.log(this.props)
        return <div style={rootStyle}>
          productDEtail
      </div>
    }
}
