import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectBox from '../../components/Select'

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
            isClickedSearch: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleClick(event) {
        if(this.state.ageValue && this.state.genderValue) {
            this.setState({isClickedSearch: true})
        }
    }

    componentDidMount() {
      //this.props.getUsers()
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
              <button id="searchBtn" type="button" onClick={this.handleClick}>Search</button>
            </header>
      </div>
    }
}
