import React, { useReducer } from 'react';

function HooksUseReducerComponent() {

    const reducer = (state, action) => {
        if (action.type === 'INCREMENT') {
            return state + 1;
        }
        else if (action.type === 'DECREMENT') {
            return state - 1;
        }
        else {
            return state;
        }
    }

    const initialState = 0;

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Hooks Use-Reducer Counter: {state}</div>
            <button onClick={() => dispatch({type:'INCREMENT'})}> Increment Reducer</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}> Decrement Reducer</button>
        </div>
    )
}

export default HooksUseReducerComponent;
