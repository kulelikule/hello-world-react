import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'
import { fromJS } from 'immutable'

function List({ items }) {
    items = fromJS(items)
    items = items.map(item => (<ListItem item={item} key={item.get('id')}></ListItem>))

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