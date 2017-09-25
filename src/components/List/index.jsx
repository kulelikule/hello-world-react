import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'

function List({ items }) {
    items = items.map(item => (<ListItem item={item} key={item.id}></ListItem>))

    return (
        <div>
            {items}
        </div>
    )
}

List.propTypes = {
    items: PropTypes.array.isRequired
}

export default List