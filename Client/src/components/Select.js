import React, {Component} from 'react'

const controlStyle = {
  width: '150px'
}
export default class SelectBox extends Component {
    componentDidMount() {
      //this.props.getUsers()
    }

    render() {
        return <select defaultValue={this.props.defaultValue ? this.props.defaultValue: ''} id={this.props.id} style={controlStyle} onChange={this.props.handleChange}>
          {!this.props.defaultValue ? <option></option>: null}
          {
              this.props.data.length > 0 ? this.props.data.map((item, index) => {
                  return <option key={index}>{item}</option>
              }): null
          }
        </select>
    }
}
