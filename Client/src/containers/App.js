import React, {Component} from 'react'
import {connect} from 'react-redux'
import {excuteGetUsers} from '../actions/users'
import ProductSearch from './ProductSearch'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return <ProductSearch />
    }
}
