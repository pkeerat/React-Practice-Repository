import React from 'react';
import store from './Redux/Store/Store';
import {Provider} from 'react-redux';

import TestRedux1 from './Redux/Components/TestRedux1';
import TestRedux2 from './Redux/Components/TestRedux2';

function ReduxComponent() {
    return (
        <div>
            <Provider store={store}>
                <TestRedux1></TestRedux1>
                <br></br>
                <TestRedux2></TestRedux2>
            </Provider>
        </div>
    )
}

export default ReduxComponent;
