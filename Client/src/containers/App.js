import React, {Component} from 'react'
import {connect} from 'react-redux'
import {excuteGetUsers} from '../actions/users'
import ProductSearch from './ProductSearch'

const rootStyle = {
  width: '700px',
  margin: '0 auto'
};

export class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return <div style={rootStyle}>
          <ProductSearch />
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
