import React from 'react';
import PropTypes from 'prop-types';

class TableComponent extends React.Component {
  render() {
    return (
      <table className='table-component' style={{border: '1px solid #ddd', textAlign: 'left'}}>
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
                (typeof d[column.key] === 'function') ? 
                <td key={j}>{d[column.key]()}</td> :
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