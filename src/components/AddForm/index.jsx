import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import indexStyle from '../../index.css'

class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
    }
    save() {
        this.props.add({
            title: this.refs.title.value,
            time: this.refs.time.value
        })
    }
    render() {
        return this.props.show ? (
            <div styleName="add-form" className="fl">
                <label>标题</label>
                <input type="text" ref="title"/>
                <label>时间</label>
                <input type="text" ref="time"/>
                <button onClick={ this.save }>添加</button>
                <button onClick={ this.props.cancel }>取消</button>
            </div>
        ) : null
    }
}

AddForm.propTypes = {
    show: PropTypes.bool.isRequired,
    add: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired
}

export default CSSModules(AddForm, indexStyle)