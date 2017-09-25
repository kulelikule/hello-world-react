import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import indexStyle from '../../index.css'

function CreateBar({ onClick }) {
    return (
        <div styleName="create-bar" onClick={onClick}>创建新文档</div>
    )
}

CreateBar.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CSSModules(CreateBar, indexStyle)