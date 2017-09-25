import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import indexStyles from '../../index.css'

function ListItem({ item }) {
    return (
        <div className="list-item" styleName="item-style">
            <span className="fr">{item.time}</span>
            {item.title}
        </div>
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default CSSModules(ListItem, indexStyles)