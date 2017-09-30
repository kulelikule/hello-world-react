import React from 'react'
import List from './components/List'
import CreateBar from './components/CreateBar'
import AddForm from './components/AddForm'

function App({ items, onAddItem }) {
    return (
        <div>
            <CreateBar onClick={ onAddItem }></CreateBar>
            <List items={items}></List>
        </div>
    )
}

export default App;
