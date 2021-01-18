
const initialState = {
    count: 0,
    checkedList: ["Name", "Age", "Address", "action"]
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log('counter action INCREMENT', action)
            return {
                ...state,
                count:  action.val
            }
        case 'CHECKED_LIST':
            console.log('counter action CHECKED_LIST', action)
            return {
                ...state,
                checkedList:  action.val
            }
        default:
            return state
    }
}