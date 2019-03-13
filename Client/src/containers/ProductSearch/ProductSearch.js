import React, {Component} from 'react'
import {connect} from 'react-redux'

class ProductSearch extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      //this.props.getUsers()
    }

    render() {
        return <div>
          <select>
            <option>0-5</option>
          </select>
      </div>
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
    //getUsers: () => dispatch(excuteGetUsers())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductSearch);
