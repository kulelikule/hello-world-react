import uuid from 'uuid'
let addItem = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}

let add = () => {
    return {
        type: 'ADD_ITEM',
        payload: {
            id: uuid.v4(),
            title: `测试${Math.floor(Math.random() * 100)}`,
            time: Math.floor(Math.random() * 100)
        }
    }
}

export {
    addItem
}