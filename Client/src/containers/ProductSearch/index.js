import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectBox from '../../components/Select'
import List from './List'
import {excuteGetProducts} from '../../actions/products'

const controlStyle = {
  width: '150px'
}
const rootStyle = {
  width: '700px',
  margin: '0 auto'
};

export default class ProductSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ageValue: '',
            genderValue: '',
            isClickedSearch: '',
            products: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleClick(event) {
        this.setState({isClickedSearch: true})
        this.getProducts('?age=' + this.state.ageValue + '&gender=' + this.state.genderValue.toLowerCase())
    }

    getProducts(filterParameters) {
      excuteGetProducts(filterParameters).then((result) => {
        if(result) {
          this.setState({products: result})
        }
      })
    }

    componentDidMount() {
        this.getProducts('')
    }

    render() {
        const ageValue = ['0-5', '5-10', '10-20', '20-30', '30-50', '50+']
        const genderValue = ['Male', 'Female']
        return <div style={rootStyle}>
            <header className="header">
              <div style={{float: 'left', width: '50%'}}>
                <label>Age</label> <br/>
                <SelectBox id={'ageValue'} handleChange={this.handleChange} data={ageValue}/>
              </div>
              <div style={{float: 'left', width: '50%'}}>
                <label>Gender</label> <br/>
                <SelectBox id={'genderValue'} handleChange={this.handleChange} data={genderValue}/>
              </div>
              <button style={{marginTop: '10px'}} id="searchBtn" type="button" onClick={this.handleClick}>Search</button>
            </header>
            <List items={this.state.products}/>
      </div>
    }
}
