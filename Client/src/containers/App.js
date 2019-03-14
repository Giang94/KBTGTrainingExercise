import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductSearch from './ProductSearch'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <ProductSearch />
    }
}
