import React, {Component} from 'react'
import {connect} from 'react-redux'
import {excuteGetUsers} from '../actions/users'

const rootStyle = {
  width: '700px',
  margin: '0 auto'
};
const controlStyle = {
  width: '150px'
}

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return <div style={rootStyle}>
          <header className="header">
            <div style={{float: 'left', width: '50%'}}>
              <label>Age</label> <br/>
              <select id="ageBox" style={controlStyle}>
                <option></option>
                <option>0-5</option>
                <option>5-10</option>
                <option>10-20</option>
                <option>20-30</option>
                <option>30-50</option>
                <option>50+</option>
              </select>
            </div>
            <div style={{float: 'left', width: '50%'}}>
              <label>Gender</label> <br/>
              <select id="genderBox" style={controlStyle}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </header>
        </div>
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
