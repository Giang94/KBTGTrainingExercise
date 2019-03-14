import React, {Component} from 'react'

const controlStyle = {
  width: '150px'
}
export default class SelectBox extends Component {
    componentDidMount() {
      //this.props.getUsers()
    }

    render() {
        return <select id={this.props.id} style={controlStyle} onChange={this.props.handleChange}>
          <option></option>
          {
              this.props.data.length > 0 ? this.props.data.map((item, index) => {
                  return <option key={index}>{item}</option>
              }): null
          }
        </select>
    }
}
