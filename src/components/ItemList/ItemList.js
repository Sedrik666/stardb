import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;
    const items = data.map((item, index) => {
        const { id } = item;
        const label = renderLabel(item);
        return(
            <li className='list-group-item'
                key={id + index}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        );
    });
    return(
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propsProps = {
    omItemSelected: PropTypes,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList;


