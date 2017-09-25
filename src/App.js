import React, {Component} from 'react'
import uuid from 'uuid'
import List from './components/List'
import CreateBar from './components/CreateBar'

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
            }]
        }

        this.createItem = this.createItem.bind(this)
    }
    createItem() {
        this.setState({
            items: [...this.state.items, {
                id: uuid.v4(),
                title: `测试${Math.floor(Math.random() * 100)}`,
                time: Math.floor(Math.random() * 100)
            }]
        })
    }
    render() {
        let { items } = this.state
        return (
            <div>
                <CreateBar onClick={this.createItem}></CreateBar>
                <List items={items}></List>
            </div>
        );
    }
}

export default App;
