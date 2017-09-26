import React, {Component} from 'react'
import uuid from 'uuid'
import List from './components/List'
import CreateBar from './components/CreateBar'
import AddForm from './components/AddForm'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{
                id: 1,
                title: '测试',
                time: '2017-01-01'
            },{
                id: 2,
                title: '测试2',
                time: '2017-01-02'
            }],
            isShowAdd: false
        }

        this.createItem = this.createItem.bind(this)
        this.saveItem = this.saveItem.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    createItem() {
        this.setState({
            isShowAdd: true
        })
    }
    saveItem(item) {
        this.setState({
            items: [...this.state.items, {
                id: uuid.v4(),
                ...item
            }]
        })
        this.cancel()
    }
    cancel() {
        this.setState({
            isShowAdd: false
        })
    }
    render() {
        let { items } = this.state
        return (
            <div>
                <CreateBar onClick={this.createItem}></CreateBar>
                <List items={items}></List>
                <AddForm add={ this.saveItem } cancel={ this.cancel } show={ this.state.isShowAdd }></AddForm>
            </div>
        );
    }
}

export default App;
