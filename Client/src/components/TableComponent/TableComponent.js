import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class TableComponent extends React.Component {
  render() {
    return (
      <table className="table-component">
        <thead>
          <tr>
            {this.props.columns.map((column, id)=>(
              <th key={id}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((d, i)=>(
            <tr key={i}>
              {this.props.columns.map((column, j)=>(
                <td key={j}>{d[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TableComponent.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

TableComponent.defaultProps = {
  columns: [
    {name: '', key: ''}
  ],
  data: []
};

export default TableComponent;