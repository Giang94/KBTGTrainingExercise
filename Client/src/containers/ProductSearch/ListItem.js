import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function ListItem(props) {
  const { item } = props;
  console.log(item)
  return <li className="item" key={item.id}><Link to={'/product/' + item.id}><span>{item.name}</span> - <span>{item.price}</span></Link></li>;
}

ListItem.propTypes = {
  item: PropTypes.object,
};

export default ListItem;
