import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List(props) {
  const { items } = props;
  if (!items.length) {
    return <span className="empty-message">No items in list</span>;
  }

  return (
    <ul style={{listStyleType: 'none', paddingLeft: 0}} className="list-items">
      {items.map((item, index) => {
        return <ListItem key={index} item={item} />
      })}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

List.defaultProps = {
  items: [],
};

export default List;
