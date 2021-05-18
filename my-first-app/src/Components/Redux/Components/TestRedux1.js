import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {incrementAction,decrementAction} from '../Actions/action';

function TestRedux1() {

    const state = useSelector(state => state.changeTheNumber);
    const dispatch = useDispatch();


    
    return (
        <div>
            <div>Redux Counter: {state}</div>
            <button onClick={() => dispatch(incrementAction()) }> Redux Increment Counter</button>
            <button onClick={() => dispatch(decrementAction()) }> Redux Decrement Counter</button>
        </div>
    )
}

export default TestRedux1
