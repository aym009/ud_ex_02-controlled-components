import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = props => {
  return(
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {props.items.map((item, index) => <Item key={index} item={item} />)}
      </ol>
	</div>
  )
}

ItemList.PropTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList;
