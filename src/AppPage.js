import { connect } from 'react-redux'
import App from './App.js'
import { addItem } from './actions'

let mapStateToProps = (state) => ({
    items: state.items
})

let mapDispatchToProps = (dispatch) => ({
    onAddItem: () => {
        dispatch(addItem())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

