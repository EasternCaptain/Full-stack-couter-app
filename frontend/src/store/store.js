import { createStore } from 'redux'; 

const initialState = { count: 0 } 

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state, 
                count: state.count + action.payload
            } 
        case "DECREMENT": 
            return {
                ...state, 
                count: state.count - action.payload 
            } 
        case "LOAD": 
            return {
                ...state, 
                count: action.payload
            }
        default: 
            return state; 
    }
} 

const store = createStore(countReducer) 

export default store; 